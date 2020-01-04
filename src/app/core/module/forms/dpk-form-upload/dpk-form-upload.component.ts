import {Component, EventEmitter, forwardRef, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgModel,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {AlertService} from '../../../services/alert.service';
import {layoutConfig} from '../../../../config/layout.config';


@Component({
  selector: 'app-dpk-form-upload',
  templateUrl: './dpk-form-upload.component.html',
  styleUrls: ['./dpk-form-upload.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DpkFormUploadComponent),
    multi: true,
  },
    {
      provide: NG_VALIDATORS,
      useExisting: DpkFormUploadComponent,
      multi: true
    }
  ]
})
export class DpkFormUploadComponent implements OnInit, ControlValueAccessor, Validator {
  static self: DpkFormUploadComponent;
  fileLabel = [];

  constructor(private alertService: AlertService) {
  }

  @ViewChildren(NgModel) public validatedFields!: QueryList<NgModel>;
  value = '';
  newData: any;

  public files: NgxFileDropEntry[] = [];

  @Input() required = false;
  @Input() label = '';
  @Input() buttonLabel = 'انتخاب فایل';
  @Input() uploadInput = ' فایل خود را با کشیدن در این محل بارگذاری کنید یا با دکمه انتخاب کنید';
  labelTitle = '';
  file;
  @Input() allowedFilesUpload: string = null;

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  @Output() fileData = new EventEmitter<any>();

  ngOnInit() {
    this.labelTitle = layoutConfig.dictionary.default[this.label] ? layoutConfig.dictionary.default[this.label] : this.label;
    DpkFormUploadComponent.self = this;
  }

  public writeValue(obj: any) {
    if (obj) {
      this.newData = obj;
      this.value = this.newData;
    }
  }


  public validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors: ValidationErrors | null = null;
    this.validatedFields.forEach((ngm: NgModel) => {
      if (ngm.errors !== null) {
        if (validationErrors === null) {
          validationErrors = {};
        }
        validationErrors = ngm.errors;
      }
    });
    return validationErrors;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }


  public dropped(files: NgxFileDropEntry[]) {
    if (files[0].fileEntry.isFile && this.isFileAllowed(files[0].fileEntry.name)) {
      this.files = files;
      for (const droppedFile of files) {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.file = file;
            this.convertToBase64();
          });
        } else {
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        }
      }
    } else {
      this.alertService.error(`فقط قادر به بارگذری فایلهایی با فرمت میباشید${this.allowedFilesUpload}`);
    }
  }


  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const allowedFiles = [];
    if (this.allowedFilesUpload !== null && this.allowedFilesUpload !== '') {
      allowedFiles.push(this.allowedFilesUpload);
      const regex = /(?:\.([^.]+))?$/;
      const extension = regex.exec(fileName);
      if (undefined !== extension && null !== extension) {
        for (const ext of allowedFiles) {
          if (ext === extension[0]) {
            isFileAllowed = true;
          }
        }
      }
    } else {
      isFileAllowed = true;
    }
    return isFileAllowed;
  }


  convertToBase64() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const arrayBuffer: any = fileReader.result;
      const fileByteArray = [];
      const data = new Uint8Array(arrayBuffer);
      for (let i = 0; i < data.length; i++) {
        fileByteArray.push(data[i]);
      }
      const base64Data: any = window.btoa(String.fromCharCode(...fileByteArray));
      const senddata = {
        FormatFile: DpkFormUploadComponent.self.file.type,
        FileName: DpkFormUploadComponent.self.file.name,
        Content: base64Data
      };
      this.fileLabel.push(...this.files)
      this.fileData.emit(senddata);
      this.onChange(senddata);
    };
    fileReader.readAsArrayBuffer(this.file);
  }

  public fileOver(event) {
  }

  public fileLeave(event) {
  }


}
