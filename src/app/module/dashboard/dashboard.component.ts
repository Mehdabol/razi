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

  ngOnInit() {
    // this.barchart = new Chart('canvas', {
    //   type: 'bar',
    //   data: {
    //     labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    //     datasets: [
    //       {
    //         data: [22, 56, 11, 21, 8, 3, 87, 120, 45, 12, 75, 34],
    //         borderColor: '#3cba9f',
    //         backgroundColor: [
    //           '#3cb371',
    //           '#43ebeb',
    //           '#9966FF',
    //           '#4C4CFF',
    //           '#00FFFF',
    //           '#f990a7',
    //           '#aad2ed',
    //           '#FF00FF',
    //           '#f5deb3',
    //           '#ff0000',
    //           '#0000bb' ,
    //           'yellow'
    //         ],
    //         fill: true
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
  }
}


