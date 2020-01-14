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

  getCity(id) {
    return this.service.post(this.url + `GetAllCities?ostanCode=${id}`, '');
  }

  getServiceType() {
    return this.service.post(this.url + `GetAllKhedmatTypes`, '');
  }

  getGridAgencies(data) {
    return this.service.post(this.url + 'GetAllAgentListByRegion', data);
  }
  getGridHealthCenter(data) {
    return this.service.post(this.url + 'GetAllHealthCenters', data);
  }
}

