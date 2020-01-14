import {Component, OnInit} from '@angular/core';

import {Chart} from 'chart.js';
import {TenderService} from './service/tender.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data;
  Player = [];
  Run = [];
  barchart = [];

  constructor(private service: TenderService) {
  }

  ngOnInit() {
    this.getbpsatatesumm();
  }

  getbpsatatesumm() {
    this.service.getbpsatatesumm().subscribe((res) => {
      debugger;
    });
  }
}


