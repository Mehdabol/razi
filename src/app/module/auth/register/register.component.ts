import {Component, OnInit} from '@angular/core';
import {FormValidateService} from '../../../core/services/Form-Validate.service';
import {AlertService} from '../../../core/services/alert.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  brithDate = '';
  FormatDate = {format: 'YYYY/MM/DD'};

  constructor(private errorService: FormValidateService,
              private alertService: AlertService,
              private service: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.valid) {
      this.service.register(form.value).subscribe((res) => {
        this.onBack();
        this.alertService.success(res.Message);
      });
    } else {
      this.errorService.generateArray(form);
    }
  }

  onBack() {
    this.router.navigate(['pages/login']);
  }
}
