import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-insurance-policy',
  templateUrl: './check-insurance-policy.component.html',
  styleUrls: ['./check-insurance-policy.component.scss']
})
export class CheckInsurancePolicyComponent implements OnInit {
  selectInqueryCode = false;
  selectEstelam = "false";

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event) {
    this.selectInqueryCode = JSON.parse(event.value);
  }

}
