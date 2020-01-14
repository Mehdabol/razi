import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../http/api.service';

@Injectable()
export class NotificationService {
  url = 'razitender/api/Notification/';

  constructor(private apiService: ApiService<any>) {
  }

  getNotification() {
    return this.apiService.post(this.url + 'GetNotifications', '');
  }

  readNotification( id) {
    return this.apiService.post(this.url + `Read/${id}`, '');

  }
}
