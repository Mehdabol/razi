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
    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        datasets: [
          {
            label: 'My First dataset',
            data: [22, 56, 11, 21],
            backgroundColor: [
              'red',
              'green',
              '#FF00FF',
              '#0000bb'



            ],
          },
          {
            label: 'My First dataset',
            data: [33, 221, 5, 21],
            backgroundColor: [
              'red',
              'green',
              '#FF00FF',
              '#0000bb'

            ],
          }, {
            label: 'My First dataset',
            data: [22, 56, 11, 21],
            backgroundColor: [
              'red',
              'green',
              '#FF00FF',
              '#0000bb'

            ],
          },
          {
            label: 'My First dataset',
            data: [22, 89, 110, 21],
            backgroundColor: [
              'red',
              'green',
              '#FF00FF',
              '#0000bb'

            ],
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  onSearch() {

  }
}
