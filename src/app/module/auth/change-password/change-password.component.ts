import {Component, OnInit} from '@angular/core';
import {FormValidateService} from '../../../core/services/Form-Validate.service';
import {AlertService} from '../../../core/services/alert.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {


  constructor(private errorService: FormValidateService,
              private alertService: AlertService,
              private service: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.valid) {
      this.service.changePassword(form.value).subscribe((res) => {
        this.alertService.success(res.Message);
        this.onBack();
      });
    } else {
      this.errorService.generateArray(form);
    }
  }

  onBack() {
    this.router.navigate(['pages/dashboard']);
  }
}
