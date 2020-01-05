import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/http/api.service';

@Injectable()
export class TotalDamageTreatmentService {
  url = 'razitenderinquery/api/Inquery/';

  constructor(private service: ApiService<any>) {
  }

  getGridData() {
    return this.service.post(this.url + 'GetAllTotalTreatmentLosses', '');
  }
}
