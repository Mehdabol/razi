import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard-bar-chart',
  templateUrl: './dashboard-bar-chart.component.html',
  styleUrls: ['./dashboard-bar-chart.component.scss']
})
export class DashboardBarChartComponent implements OnInit {
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };
  data;
  barchart;

  constructor() {
  }

  ngOnInit() {
    this.onSearch();
    // this.barchart = new Chart('canvas', {
    //   type: 'bar',
    //   data: {
    //     labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    //     datasets: [
    //       {
    //         label: 'My First dataset',
    //         data: [22, 56, 11, 21],
    //         backgroundColor: [
    //           'red',
    //           'green',
    //           '#FF00FF',
    //           '#0000bb'
    //
    //
    //         ],
    //       },
    //       {
    //         label: 'My First dataset',
    //         data: [33, 221, 5, 21],
    //         backgroundColor: [
    //           'red',
    //           'green',
    //           '#FF00FF',
    //           '#0000bb'
    //
    //         ],
    //       }, {
    //         label: 'My First dataset',
    //         data: [22, 56, 11, 21],
    //         backgroundColor: [
    //           'red',
    //           'green',
    //           '#FF00FF',
    //           '#0000bb'
    //
    //         ],
    //       },
    //       {
    //         label: 'My First dataset',
    //         data: [22, 89, 110, 21],
    //         backgroundColor: [
    //           'red',
    //           'green',
    //           '#FF00FF',
    //           '#0000bb'
    //
    //         ],
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

  onSearch() {
    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        datasets: [
          {
            label: 'کل مناقصات',
            backgroundColor: '#8e5ea2',
            data: [11, 24, 27, 33]
          },
          {
            label: 'مناقصات در دست بررسی',
            backgroundColor: '#3e95cd',
            data: [11, 22, 56, 22]
          },
          {
            label: 'مناقصات تایید شده',
            backgroundColor: '#38a938',
            data: [45, 70, 34, 24]
          }, {
            label: 'مناقصات رد شده',
            backgroundColor: '#db6969',
            data: [23, 54, 32, 78]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              fontFamily: 'samim'
            }
          }]
        }
      }
    });
  }
}
