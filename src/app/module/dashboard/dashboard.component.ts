import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Chart} from 'chart.js';

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

  constructor(private http: HttpClient) {
  }

  ngOnInit() {}
}


