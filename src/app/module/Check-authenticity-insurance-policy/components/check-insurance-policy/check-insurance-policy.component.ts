import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
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
    this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onChange(event) {
    this.selectInqueryCode = JSON.parse(event.value);
  }

  postData(form, modalContent) {
    this.modalContent = modalContent;
    if (this.selectInqueryCode) {
      this.getDataYekta(form);
    } else {
      this.getDataChapi(form);
    }
  }

  getDataChapi(form) {
    const data = {policyId: form.value.chapi};
    this.service.getPolicyInsurance(data).subscribe((res) => {
      debugger;
      this.open();
    });

  }

  getDataYekta(form) {
    const data = {policyIdfullBNo: form.value.yekte, nationalCode: form.value.nationalCode};
    this.service.getYektaCodeRes(data).subscribe((res) => {
      debugger;
      this.open();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
