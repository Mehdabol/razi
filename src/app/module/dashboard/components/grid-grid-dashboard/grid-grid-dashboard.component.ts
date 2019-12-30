import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TenderService} from '../../service/tender.service';
import {AlertService} from '../../../../core/services/alert.service';

@Component({
  selector: 'app-grid-grid-dashboard',
  templateUrl: './grid-grid-dashboard.component.html',
  styleUrls: ['./grid-grid-dashboard.component.scss']
})
export class GridGridDashboardComponent implements OnInit {
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };

  constructor(private router: Router,
              private alertService: AlertService,
              private service: TenderService) {
  }

  ngOnInit() {
    this.getGrid();
  }


  getGrid() {
    debugger;
    this.service.getGrid(0, 100).subscribe((res) => {
      debugger;
    }, error => {
      this.alertService.error(error);
    });
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
