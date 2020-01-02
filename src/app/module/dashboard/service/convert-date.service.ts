import {Injectable} from '@angular/core';

@Injectable()
export class ConvertDateService {
  constructor() {
  }

  convertToIntDate(date: string, convertot: string) {
    let newDate = '';
    if (date) {
      newDate = date.replace(convertot, '').replace(convertot, '');
    }
    return newDate;
  }
}
