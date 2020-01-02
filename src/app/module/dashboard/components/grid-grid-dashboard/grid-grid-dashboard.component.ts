import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TenderService} from '../../service/tender.service';
import {AlertService} from '../../../../core/services/alert.service';
import {GridModel} from '../../model/grid.model';

@Component({
  selector: 'app-grid-grid-dashboard',
  templateUrl: './grid-grid-dashboard.component.html',
  styleUrls: ['./grid-grid-dashboard.component.scss']
})
export class GridGridDashboardComponent implements OnInit {
  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };

  gridData: GridModel[] = [];
  canStartButton: boolean = false;

  constructor(private router: Router,
              private alertService: AlertService,
              private service: TenderService) {
    this.canStart();
  }

  ngOnInit() {
    this.getGrid();
  }


  getGrid() {
    this.service.getGrid(0, 100).subscribe((res) => {
      this.gridData = res.Items;
    });
  }

  onAdd() {
    this.router.navigate(['pages/add']);
  }

  onDetail() {
    this.router.navigate(['pages/detail2/2']);
  }

  canStart() {
    this.service.canStart().subscribe((res: boolean) => {
      this.canStartButton = res;
    });
  }

  onSearch() {
  }

  onCliTime() {
    this.router.navigate(['pages/time']);
  }
}
