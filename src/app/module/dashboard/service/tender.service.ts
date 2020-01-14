import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TenderService {
  url = 'razitender/api/Common/';
  BpUrl = 'razitender/api/BP/';
  sabtUrl = 'razitender/api/SabteDarkhast/';
  development = 'razitender/api/DevelopmentManagerTopicCondsReview/';
  tender = 'razitender/api/TenderExpertTopicCondsReview/';
  constructor(private service: ApiService<any>) {
  }

  getGrid(skip, take) {
    return this.service.get(this.BpUrl + `GetAll?skip=${skip}&take=${take}`);

  }


  getOstanType() {
    return this.service.get(this.url + 'Ostans');
  }
  getbpsatatesumm() {
    return this.service.get(this.BpUrl + 'GetBPStateSummry');
  }

  getCitiesTypeType() {
    return this.service.get(this.url + 'Cities');
  }

  getBimeGarsType() {
    return this.service.get(this.url + 'BimeGars');
  }

  getBimeGroupsType() {
    return this.service.get(this.url + 'BimeGroups');
  }

  getBimefieldType() {
    return this.service.get(this.url + 'BimehFields');
  }

  getHozurTypes() {
    return this.service.get(this.url + 'HozurTypes');
  }

  getMonagheseGozarTypes() {
    return this.service.get(this.url + 'MonagheseGozarTypes');
  }

  getShohratKhesaratTypes() {
    return this.service.get(this.url + 'ShohratKhesarats');
  }

  getWarrantyTypes() {
    return this.service.get(this.url + 'WarrantyTypes');
  }

  getPhonePrefixTypes() {
    return this.service.get(this.url + 'PhonePrefixes');
  }

  insertData(data) {
    return this.service.post(this.sabtUrl + 'Start', data);
  }

  canStart() {
    return this.service.get(this.sabtUrl + 'CanStart');
  }

  getHozurType() {
    return this.service.get(this.url + 'HozurTypes');
  }

  DownloadFile(data) {
    return this.service.post('File/Upload', data);
  }

  getEditData(id) {
    return this.service.get(this.development + `Get/${id}`);
  }

  approve(data) {
    return this.service.post(this.development + `Approve?BPID=${data}`, '');

  }

  reject(data) {
    return this.service.post(this.development + `Reject?BPID=${data}`, '');

  }

  close(data) {
    return this.service.post(this.development + `Close?BPID=${data}`, '');
  }
  getEditDataTender(id) {
    return this.service.get(this.tender + `Get?id=${id}`);
  }
  approveTender(data) {
    return this.service.post(this.tender + `Approve?BPID=${data}`, '');

  }

  rejectTender(data) {
    return this.service.post(this.tender + `Reject?BPID=${data}`, '');

  }

  closeTender(data) {
    return this.service.post(this.tender + `Close?BPID=${data}`, '');
  }
}
