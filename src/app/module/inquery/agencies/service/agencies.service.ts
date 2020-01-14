import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/http/api.service';

@Injectable()
export class AgenciesService {
  url = 'razitenderinquery/api/Inquery/';

  constructor(private service: ApiService<any>) {
  }


  getOstan() {
    return this.service.post(this.url + 'GetAllStates', '');
  }

  getCity() {
    return this.service.post(this.url + 'GetAllCities', '');
  }
}

