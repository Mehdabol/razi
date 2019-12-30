import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TenderService {
  url = 'Common/';
  BpUrl = 'BP/';
sabtUrl = 'SabteDarkhast/';
  constructor(private service: ApiService<any>) {
  }

  getGrid(skip, take) {
    return this.service.get(this.BpUrl + `GetAll?skip=${skip}&take=${take}`);

  }


  getOstanType() {
    return this.service.get(this.url + 'OstansType');
  }

  getCitiesTypeType() {
    return this.service.get(this.url + 'CitiesType');
  }

  getBimeGarsType() {
    return this.service.get(this.url + 'BimeGars');
  }

  getBimeGroupsType() {
    return this.service.get(this.url + 'BimeGroups');
  }

  getHozurTypes() {
    return this.service.get(this.url + 'HozurTypes');
  }

  getMonagheseGozarTypes() {
    return this.service.get(this.url + 'MonagheseGozarTypes');
  }

  getShohratKhesaratTypes() {
    return this.service.get(this.url + 'ShohratKhesarat');
  }

  getWarrantyTypes() {
    return this.service.get(this.url + 'WarrantyTypes');
  }

  getPhonePrefixTypes() {
    return this.service.get(this.url + 'PhonePrefix');
  }

  insertData(data) {
    return this.service.put(this.BpUrl + 'Insert', data);
  }

  canStart() {
    return this.service.get(this.sabtUrl + 'CanStart');

  }
}
