import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  url = 'authenticationwebservice/api/Authenticate/';

  constructor(private service: ApiService<any>) {
  }

  login(data) {
   return this.service.postLogin(this.url + `GetUserToken`, data);
  }
  resetPassword(data) {
    return this.service.postLogin(this.url + `ResetPassword`, data);
  }

  register(data) {
    return this.service.postLogin(this.url + `CreateUser`, data);
  }
  changePassword(data) {
    return this.service.postLogin(this.url + `ChangePassword`, data);
  }
}
