import {Injectable} from '@angular/core';
import {AlertService} from './alert.service';
import {layoutConfig} from '../../config/layout.config';

@Injectable()
export class FormValidateService {
  constructor(private alertService: AlertService) {
  }


  generateArray(form) {
    const control = form.controls;
    Object.keys(control).forEach(controlName => control[controlName].markAsTouched());
    Object.keys(control).forEach(controlName => control[controlName].markAsDirty());
    const data = [];
    Object.keys(control).map((key) => {
      const newObj = {key, value: control[key]};
      data.unshift(newObj);
    });
    let title = '';
    for (let i = 0; i < data.length; i++) {
      const error = data[i].value.errors ? Object.keys(data[i].value.errors) : [];
      const inputKey = data[i].key;
      for (let i = 0; i < error.length; i++) {
        title = inputKey + '_' + error[i];
        const message = layoutConfig.dictionary.default[title] ? layoutConfig.dictionary.default[title] : title;
        this.alertService.error(message);
      }
    }
  }
}
