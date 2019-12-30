import {Component, OnInit} from '@angular/core';
import {DropDownModel} from '../../model/drop-down.model';
import {TenderService} from '../../service/tender.service';
import {AlertService} from '../../../../core/services/alert.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-registered',
  templateUrl: './add-registered.component.html',
  styleUrls: ['./add-registered.component.scss']
})
export class AddRegisteredComponent implements OnInit {
  dataAuto = [];
  keyword = 'code';
  HozurTypeID = '';
  NeedWarranty = true;
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };

  MonagheseGozarType = [];

  OstansType: DropDownModel[] = [];
  CitiesType: DropDownModel[] = [];
  BimeGarsType: DropDownModel[] = [];
  BimeGroupsType: DropDownModel[] = [];
  HozurTypes: DropDownModel[] = [];
  MonagheseGozarTypes: DropDownModel[] = [];
  ShohratKhesaratType: DropDownModel[] = [];
  WarrantyTypes: DropDownModel[] = [];
  PhonePrefixType: DropDownModel[] = [];

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
  }

  onBack() {
    this.router.navigate(['/pages/dashboard']);
  }

  onSubmitForm(form: NgForm) {
    if (form.valid) {
      this.insertData(form.value);
    } else {
      this.errorService.generateArray(form);
    }
  }

  insertData(data) {
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
    this.service.getOstanType().subscribe((res: DropDownModel[]) => {
      this.OstansType = res;
    });
  }

  getCitiesTypeType() {
    this.service.getCitiesTypeType().subscribe((res: DropDownModel[]) => {
      this.CitiesType = res;
    });
  }

  getBimeGarsType() {
    this.service.getBimeGarsType().subscribe((res: DropDownModel[]) => {
      this.BimeGarsType = res;
    });
  }

  getBimeGroupsType() {
    this.service.getBimeGroupsType().subscribe((res: DropDownModel[]) => {
      this.BimeGroupsType = res;
    });
  }

  getHozurTypes() {
    this.service.getHozurTypes().subscribe((res: DropDownModel[]) => {
      this.HozurTypes = res;
    });
  }

  getMonagheseGozarTypes() {
    this.service.getMonagheseGozarTypes().subscribe((res: DropDownModel[]) => {
      this.MonagheseGozarTypes = res;
    });
  }

  getShohratKhesaratTypes() {
    this.service.getShohratKhesaratTypes().subscribe((res: DropDownModel[]) => {
      this.ShohratKhesaratType = res;
    });
  }

  getWarrantyTypes() {
    this.service.getWarrantyTypes().subscribe((res: DropDownModel[]) => {
      this.WarrantyTypes = res;
    });
  }

  getPhonePrefixTypes() {
    this.service.getPhonePrefixTypes().subscribe((res: DropDownModel[]) => {
      this.PhonePrefixType = res;
    });
  }


  onChngeNeedWarranty(event) {
    this.NeedWarranty = event;

  }


  saveModal(form: NgForm) {
  }

  onCloseModal(event) {
    this.modalService.dismissAll(event);
  }

  openModal(event) {
    this.modalService.open(event);
  }
}
