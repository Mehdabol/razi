import {Component, OnInit} from '@angular/core';
import {AgenciesService} from '../service/agencies.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  ostan = [];
  CityList = [];

  constructor(private service: AgenciesService) {
  }

  get absUrl() {
    return window.location.href;
  }

  ngOnInit() {
    this.getOstan();
    this.getCity();
  }


  getOstan() {
    this.service.getOstan().subscribe((res) => {
      this.ostan = res.Data;
    });
  }

  getCity() {
    this.service.getCity().subscribe((res) => {
      this.CityList = res.Data;
    });
  }

  onFilter(form) {
    debugger;
  }


}
