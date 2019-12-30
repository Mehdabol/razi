import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grid-grid-dashboard',
  templateUrl: './grid-grid-dashboard.component.html',
  styleUrls: ['./grid-grid-dashboard.component.scss']
})
export class GridGridDashboardComponent implements OnInit {
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onAdd() {
    this.router.navigate(['pages/add']);
  }

  onDetail() {
    this.router.navigate(['pages/detail2/2']);
  }

  onSearch() {
  }

  onCliTime() {
    this.router.navigate(['pages/time']);
  }
}
