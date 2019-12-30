import {Component, OnInit} from '@angular/core';
import {FormValidateService} from '../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private errorService: FormValidateService,
              private alertService: AlertService,
              private service: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.valid) {
      // localStorage.setItem('token', '33334234234qdsadf');
      // // this.router.navigate(['/pages/dashboard']);
      this.service.login(form.value).subscribe((res) => {
        this.alertService.success(res.Message);
        window.location.href = '';
        localStorage.setItem('token', res.Data);
      }, error => {
        this.alertService.error(error);
      });
    } else {
      this.errorService.generateArray(form);
    }
  }

  onRegister() {
    this.router.navigate(['/pages/auth/register']);
  }

  changePassword() {
    this.router.navigate(['/pages/auth/change-password']);

  }
}
