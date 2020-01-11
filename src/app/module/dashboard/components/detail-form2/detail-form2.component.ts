import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TenderService} from '../../service/tender.service';
import {AlertService} from '../../../../core/services/alert.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {HamrazGridModel} from '../../model/hamraz-grid.model';
import {ConvertDateService} from '../../service/convert-date.service';
import {FormModel, Permission} from '../../model/form.model';

@Component({
  selector: 'app-detail-form2',
  templateUrl: './detail-form2.component.html',
  styleUrls: ['./detail-form2.component.scss']
})
export class DetailForm2Component implements OnInit {
  disabledForm = false;
  file = [];
  hozuriSelect;
  rogabayAsli = [];
  keyword = 'PersianTitle';
  HozurTypeID = '';
  NeedWarranty = true;
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };
  rogabaAsliTitle = [];
  rogabaAsliTitleInput = '';
  BimeFieldIDTitle;
  BimeFieldID;
  HagheBimeTypeTile;
  HagheBimeType;
  LastYearBimeGarID;
  LastYearBimeGarIDTitle;

  gridHamraz = [];
  formHamraz: HamrazGridModel = {};
  MonagheseGozarType = [];
  BimefieldType = [];
  OstansType = [];
  CitiesType = [];
  BimeGarsType = [];
  BimeGroupsType = [];
  HozurTypes = [];
  MonagheseGozarTypes = [];
  ShohratKhesaratType = [];
  WarrantyTypes = [];
  PhonePrefixType = [];
  HozurType = [];
  id = '';

  DataModel: FormModel = {};
  permisson: Permission = {};

  constructor(private router: Router,
              private service: TenderService,
              private alertService: AlertService,
              private errorService: FormValidateService,
              private convertDaate: ConvertDateService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
    this.id = route.snapshot.paramMap.get('id');
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
    this.getEditData();

  }

  getEditData() {
    this.service.getEditDataTender(this.id).subscribe((res) => {
      // debugger;
      if (!res.Premissions.CanEdit) {
        this.disabledForm = true;
      } else {
        this.disabledForm = false;
      }
      res.Item.SabteDarkhastDTO.ShohratKhesaratMonagheseGozar = Number(res.Item.SabteDarkhastDTO.ShohratKhesaratMonagheseGozar);
      this.DataModel = res.Item.SabteDarkhastDTO;
      this.gridHamraz = res.Item.SabteDarkhastDTO.SabteDarkhastBimeGroups;
      this.permisson = res.Premissions;
    });
  }

  onApprove() {
    this.service.approveTender(this.id).subscribe((res) => {
      this.alertService.success('عملیات با موفقیت انجام شد');
    });
  }

  onClose() {
    this.service.closeTender(this.id).subscribe((res) => {
      this.alertService.success('عملیات با موفقیت انجام شد');

    });
  }

  CanReject() {
    this.service.rejectTender(this.id).subscribe((res) => {
      this.alertService.success('عملیات با موفقیت انجام شد');

    });
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
    data.BaragorzariDate = this.convertDaate.convertToIntDate(data.BaragorzariDate, '/');
    data.MohlatElamHagheBimeDate = this.convertDaate.convertToIntDate(data.MohlatElamHagheBimeDate, '/');
    data.SarresidDate = this.convertDaate.convertToIntDate(data.SarresidDate, '/');
    const valueInsert = {
      HozurTypeID: data.HozurTypeID,
      MonaghesTopic: data.MonaghesTopic,
      Code: data.Code,
      PeopleNum: data.PeopleNum,
      HodudePortofaKoli: data.HodudePortofaKoli,
      BargorzariDate: data.BaragorzariDate,
      MohlatElamHagheBimeDate: data.MohlatElamHagheBimeDate,
      ShohratKhesaratMonagheseGozar: data.ShohratKhesaratMonagheseGozar,
      MonagheseGozar: data.MonagheseGozar,
      NeedWarranty: data.NeedWarranty,
      WarrantyAmount: data.WarrantyAmount,
      SarresidDate: data.SarresidDate,
      WarrantyTypeId: data.WarrantyTypeId,
      MonagheseGozarTypeID: data.MonagheseGozarTypeID,
      ShenaseMeli: '222',
      ShenaseMeliInt: data.ShenaseMeliInt,
      EghtesadiCode: '22',
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
      BPRaghibs: this.rogabayAsli,
      BPIFiles: this.file
    };
    this.postData(valueInsert);
  }

  postData(data) {
    this.service.insertData(data).subscribe(res => {
      this.alertService.success('ثبت با موفقیت انجام شد');
    }, error => {
      this.alertService.error(error);
    });
  }

  selectEvent(item) {
    this.LastYearBimeGarIDTitle = item.PersianTitle;
    this.LastYearBimeGarID = item.ID;
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


  saveModal(form: NgForm, modalName) {
    this.resetForm();
    if (form.invalid) {
      this.errorService.generateArray(form);
    } else {
      this.formHamraz.PersonNumber = form.value.PersonNumber;
      this.formHamraz.HagheBimeAmount = form.value.HagheBimeAmount;
      this.formHamraz.Comment = form.value.Comment;
      this.formHamraz.SabegheKhesaratPercent = form.value.SabegheKhesaratPercent;
      this.formHamraz.BimeFieldIDTitle = this.BimeFieldIDTitle;
      this.formHamraz.BimeFieldID = this.BimeFieldID;
      this.formHamraz.HagheBimeTypeTile = this.HagheBimeTypeTile;
      this.formHamraz.HagheBimeType = this.HagheBimeType;
      this.formHamraz.LastYearBimeGarIDTitle = this.LastYearBimeGarIDTitle;
      this.formHamraz.LastYearBimeGarID = this.LastYearBimeGarID;
      const data = this.formHamraz;
      this.gridHamraz.push(data);
      this.onCloseModal(modalName);
    }
  }

  onCloseModal(event) {
    this.modalService.dismissAll(event);
  }

  openModal(event) {
    this.BimeFieldIDTitle = null;
    this.BimeFieldID = null;
    this.HagheBimeTypeTile = null;
    this.HagheBimeType = null;
    this.LastYearBimeGarIDTitle = null;
    this.LastYearBimeGarID = null;
    this.modalService.open(event);
  }

  onChangeBimeGroup(event) {
    const data = event.value;
    const value = this.BimeGroupsType.filter(x => x.ID === data);
    this.HagheBimeType = value[0].ID;
    this.HagheBimeTypeTile = value[0].PersianTitle;
  }

  onChangeReshteBime(event) {
    const data = event.value;
    const value = this.BimefieldType.filter(x => x.ID === data);
    this.BimeFieldID = value[0].ID;
    this.BimeFieldIDTitle = value[0].PersianTitle;

  }

  onUploadFile(event) {
    this.service.DownloadFile(event).subscribe((res) => {
      const data = {FileID: res.Item.ID};
      this.file.push(data);
    });
  }

  getHozurType() {
    this.service.getHozurType().subscribe((res) => {
      this.HozurType = res.Items;
    });
  }

  onChnageChackbox(event) {
    const data = {BimeGarID: event.target.value};
    const obj = this.rogabayAsli.filter(x => x.BimeGarID === data.BimeGarID);
    const index = this.rogabayAsli.indexOf(obj[0]);

    if (index !== -1) {
      this.rogabayAsli.splice(index, 1);
    } else {
      this.rogabayAsli.push(data);
    }
    const title = this.BimeGarsType.filter(x => x.ID === Number(data.BimeGarID));
    const objTitle = this.rogabaAsliTitle.filter(x => x === title[0].PersianTitle);
    const indexTitle = this.rogabaAsliTitle.indexOf(objTitle[0]);
    if (indexTitle !== -1) {
      this.rogabaAsliTitle.splice(indexTitle, 1);
    } else {
      this.rogabaAsliTitle.push(title[0].PersianTitle);
    }
    for (let i = 0; i < this.rogabaAsliTitle.length; i++) {
      this.rogabaAsliTitleInput += this.rogabaAsliTitle[i] + ',';
    }
  }


  onChangeHozure(event) {
    this.hozuriSelect = event.value;
  }

  resetForm() {

    this.formHamraz = {
      LastYearBimeGarIDTitle: null,
      BimeFieldIDTitle: null,
      HagheBimeTypeTile: null,
      Comment: null,
      BimeFieldID: null,
      HagheBimeAmount: null,
      HagheBimeType: null,
      LastYearBimeGarID: null,
      PersonNumber: null,
      SabegheKhesaratPercent: null
    };
  }


  removeFromSabtGrid(index) {
    this.gridHamraz.splice(index, 1);
  }

}
