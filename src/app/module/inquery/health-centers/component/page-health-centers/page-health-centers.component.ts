import { Component, OnInit } from '@angular/core';
import {AgenciesService} from '../../../agencies/service/agencies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-health-centers',
  templateUrl: './page-health-centers.component.html',
  styleUrls: ['./page-health-centers.component.scss']
})
export class PageHealthCentersComponent implements OnInit {

  ostan = [];
  CityList = [];

  constructor(private service: AgenciesService,
              private router: Router) {
  }

  get absUrl() {
    return window.location.href;
  }

  ngOnInit() {
    this.getOstan();
  }


  getOstan() {
    this.service.getOstan().subscribe((res) => {
      this.ostan = res.Data;
    });
  }

  getCity(event) {
    this.service.getCity(event).subscribe((res) => {
      this.CityList = res.Data;
    });
  }

  onFilter(form) {
    this.router.navigate([`pages/agencies-grid/${form.value.city}/${form.value.ostan}`]);
  }

}
