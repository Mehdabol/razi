import {Component, OnInit} from '@angular/core';
import {DropDownModel} from '../../model/drop-down.model';
import {TenderService} from '../../service/tender.service';
import {AlertService} from '../../../../core/services/alert.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {HamrazGridModel} from '../../model/hamraz-grid.model';

@Component({
  selector: 'app-add-registered',
  templateUrl: './add-registered.component.html',
  styleUrls: ['./add-registered.component.scss']
})
export class AddRegisteredComponent implements OnInit {
  file;
  hozuriSelect;
  rogabayAsli = [];
  keyword = 'PersianTitle';
  HozurTypeID = '';
  NeedWarranty = true;
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };

  gridHamraz = [];
  formHamraz: HamrazGridModel = {
    afradNumber: null,
    BimeGroupID: null,
    BimeGroupTitle: null,
    description: null,
    haghBime: null,
    lastBimeGarsType: null,
    lastBimeGarsTypeTitle: null,
    reshteBime: null,
    reshteBimeTitle: null,
    sabeghekhesarat: null
  };
  MonagheseGozarType = [];
  BimefieldType: [] = [];
  OstansType: DropDownModel[] = [];
  CitiesType: DropDownModel[] = [];
  BimeGarsType: DropDownModel[] = [];
  BimeGroupsType: DropDownModel[] = [];
  HozurTypes: DropDownModel[] = [];
  MonagheseGozarTypes: DropDownModel[] = [];
  ShohratKhesaratType: DropDownModel[] = [];
  WarrantyTypes: DropDownModel[] = [];
  PhonePrefixType: DropDownModel[] = [];
  HozurType: DropDownModel[] = [];

  constructor(private router: Router,
              private service: TenderService,
              private alertService: AlertService,
              private errorService: FormValidateService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getOstanType();
    this.getCitiesTypeType();
    this.getBimeGarsType();
    this.getBimeGroupsType();
    this.getHozurTypes();
    this.getMonagheseGozarTypes();
    this.getShohratKhesaratTypes();
    this.getWarrantyTypes();
    this.getPhonePrefixTypes();
    this.getBimefieldType();
    this.getHozurType();
  }

  onBack() {
    this.router.navigate(['/pages/dashboard']);
  }

  onSubmitForm(form: NgForm) {
    // if (form.valid) {
    this.insertData(form.value);
    // } else {
    //   this.errorService.generateArray(form);
    // }
  }

  insertData(data) {
    debugger;
    let comment = [];
    for (let i = 0; i < this.gridHamraz.length; i++) {
      comment = this.gridHamraz[i].description;
    }
    const valueInsert = {
      HozurTypeID: data.HozurTypeID,
      MonagheseGozar: data.MonagheseGozar,
      MonaghesTopic: data.MonaghesTopic,
      Code: data.Code,
      BimeGroupID: data.BimeGroupID,
      PeopleNum: data.PeopleNum,
      HodudePortofaKoli: data.HodudePortofaKoli,
      LastYearHagheBimeAmount: 0,
      BargorzariDate: data.BaragorzariDate,
      PackatGoshayesheDate: 0,
      MohlatElamHagheBimeDate: data.MohlatElamHagheBimeDate,
      ShohratKhesaratMonagheseGozar: data.ShohratKhesaratMonagheseGozar,
      NeedWarranty: data.NeedWarranty,
      WarrantyAmount: data.WarrantyAmount,
      SarresidDate: data.SarresidDate,
      WarrantyTypeId: data.WarrantyTypeId,
      MonagheseGozarTypeID: data.MonagheseGozarTypeID,
      ShenaseMeli: data.ShenaseMeliInt,
      ShenaseMeliInt: data.ShenaseMeliInt,
      EghtesadiCode: data.EghtesadiCodeInt,
      EghtesadiCodeInt: data.EghtesadiCodeInt,
      AddressOstanID: data.AddressOstanID,
      AddressCityID: data.AddressCityID,
      AddressDetail: data.AddressDetail,
      PhonePrefix: data.PhonePrefix,
      Phone: data.Phone,
      MonagheseGozarBank: data.MonagheseGozarBank,
      BranchCode: data.BranchCode,
      BranchName: data.BranchName,
      AccountNumber: 0,
      AccountNumberInt: data.AccountNumberInt,
      ShabaNumber: data.ShabaNumber,
      ZinafName: data.ZinafName,
      SabteDarkhastBimeGroups: this.gridHamraz,
      //   [
      //   {
      //     BimeFieldID: 'string',
      //     HagheBimeAmount: 'string',
      //     HagheBimeType: 'string',
      //     LastYearBimeGarID: 'string',
      //     SabegheKhesaratPercent: 'string',
      //     Comment: comment,
      //     SabteDarkhastID: 0,
      //   }
      // ],
      BPRaghibs: this.rogabayAsli,

    };
    this.service.insertData(data).subscribe(res => {

    }, error => {
      this.alertService.error(error);
    });
  }

  selectEvent(item) {
  }

  onChangeSearch(val: string) {
  }

  onFocused(e) {
  }

  getOstanType() {
    this.service.getOstanType().subscribe((res) => {
      this.OstansType = res.Items;
    });
  }

  getCitiesTypeType() {
    this.service.getCitiesTypeType().subscribe((res) => {
      this.CitiesType = res.Items;
    });
  }

  getBimeGarsType() {
    this.service.getBimeGarsType().subscribe((res: any) => {
      this.BimeGarsType = res.Items;
    });
  }

  getBimeGroupsType() {
    this.service.getBimeGroupsType().subscribe((res) => {
      this.BimeGroupsType = res.Items;
    });
  }

  getHozurTypes() {
    this.service.getHozurTypes().subscribe((res) => {
      this.HozurTypes = res.Items;
    });
  }

  getMonagheseGozarTypes() {
    this.service.getMonagheseGozarTypes().subscribe((res) => {
      this.MonagheseGozarTypes = res.Items;
    });
  }

  getShohratKhesaratTypes() {
    this.service.getShohratKhesaratTypes().subscribe((res) => {
      this.ShohratKhesaratType = res.Items;
    });
  }

  getWarrantyTypes() {
    this.service.getWarrantyTypes().subscribe((res) => {
      this.WarrantyTypes = res.Items;
    });
  }

  getPhonePrefixTypes() {
    this.service.getPhonePrefixTypes().subscribe((res) => {
      this.PhonePrefixType = res.Items;
    });
  }

  getBimefieldType() {
    this.service.getBimefieldType().subscribe((res) => {
      this.BimefieldType = res.Items;
    });
  }

  // onChngeNeedWarranty(event) {
  //   this.NeedWarranty = event;
  //
  // }


  saveModal(form: NgForm, modalName) {
    // if (form.invalid) {
    //   this.errorService.generateArray(form);
    // } else {
    this.gridHamraz.push(form.value);
    this.onCloseModal(modalName);
    // }
  }

  onCloseModal(event) {
    this.modalService.dismissAll(event);
  }

  openModal(event) {
    this.modalService.open(event);
  }

  onChangeBimeGroup(event) {
  }

  onChangeReshteBime(event) {
  }

  onUploadFile(event) {
    this.service.DownloadFile(event).subscribe((res) => {
      debugger;
    });
  }

  getHozurType() {
    this.service.getHozurType().subscribe((res) => {
      this.HozurType = res.Items;
    });
  }

  onChnageChackbox(event) {
    const data = {BimeGarID: event.value};
    this.rogabayAsli.push(data);
    debugger;
  }

  onChangeHozure(event) {
    this.hozuriSelect = event.value;
  }

}
