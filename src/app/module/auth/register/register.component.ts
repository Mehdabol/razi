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
      this.service.register(form.value).subscribe((res) => {
        debugger;
        this.alertService.success(res.Message);
        // window.location.href = '';
        // localStorage.setItem('token', res.Data);
      });
    } else {
      this.errorService.generateArray(form);
    }
  }

  onBack() {
    this.router.navigate(['pages/login']);
  }
}
