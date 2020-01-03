import {Component, OnInit} from '@angular/core';
import {FormValidateService} from '../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AlertService} from '../../../core/services/alert.service';
import {TokenService} from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private errorService: FormValidateService,
              private alertService: AlertService,
              private service: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.valid) {
      this.service.login(form.value).subscribe((res) => {
        localStorage.setItem('token', res.Data);
        this.alertService.success(res.Message);
        // this.router.navigate(['/pages/dashboard']);
        window.location.href = '';
        this.tokenService.sendMessage(res.Data);
      });
    } else {
      this.errorService.generateArray(form);
    }
  }

  onRegister() {
    this.router.navigate(['/pages/register']);
  }

  changePassword() {
    this.router.navigate(['/pages/reset-password']);
  }

}
