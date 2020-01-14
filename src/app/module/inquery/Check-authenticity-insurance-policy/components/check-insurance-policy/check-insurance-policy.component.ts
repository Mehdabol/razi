import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CheckInsuranceService} from '../../service/check-insurance.service';

@Component({
  selector: 'app-check-insurance-policy',
  templateUrl: './check-insurance-policy.component.html',
  styleUrls: ['./check-insurance-policy.component.scss']
})
export class CheckInsurancePolicyComponent implements OnInit {
  selectInqueryCode = false;
  selectEstelam = 'false';
  closeResult: string;
  token = '';
  modalContent;

  constructor(private modalService: NgbModal,
              private service: CheckInsuranceService) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

  open() {
    this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title'});
  }

  onChange(event) {
    this.selectInqueryCode = JSON.parse(event.value);
  }

  postData(form, modalContent) {
    this.modalContent = modalContent;
    if (this.selectInqueryCode) {
      this.getDataChapi(form);
    } else {
      this.getDataYekta(form);
    }
  }

  getDataChapi(form) {
    const data = {policyId: form.value.chapi};
    this.service.getPolicyInsurance(data).subscribe((res) => {
      this.open();
    });

  }

  getDataYekta(form) {
    const data = {policyIdfullBNo: form.value.yekte, nationalCode: form.value.nationalCode};
    this.service.getYektaCodeRes(data).subscribe((res) => {
      this.open();
    });
  }


}
