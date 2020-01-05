import {ApiService} from '../../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class InsuranceInsuredService {
  url = 'razitenderinquery/api/Inquery/';

  constructor(private service: ApiService<any>) {
  }

  getGridData() {
    return this.service.post(this.url + 'GetAllInsurance','' );
  }
}

