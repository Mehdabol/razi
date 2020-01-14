import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/http/api.service';

@Injectable()
export class CheckInsuranceService {
  url = 'razitenderinquery/api/Inquery/';

  constructor(private service: ApiService<any>) {
  }


  getYektaCodeRes(data) {
    return this.service.post(this.url + 'GetAllCompanyPolicyInq', data);
  }

  getPolicyInsurance(data) {
    return this.service.post(this.url + 'GetAllPolicyInq', data);
  }
}

