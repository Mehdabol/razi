import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../../../../../module/auth/service/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  token;
  menu = [];
  hasLogin = '';
  menuItemLogin = [

    {
      title: 'اطلاع رسانی', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مراکز درمانی', path: 'health-centers', hasChile: false},
        {title: 'نمایندگان', path: 'agencies', hasChile: false},
        {title: 'شعب', path: 'dashboard1', hasChile: false},
        {title: 'خدمات بیمه ای', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'خدمات بیمه ای', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'بیمه های من', path: 'insurance-insured', hasChile: false},
        {title: 'خسارت های درمانی', path: 'total-damage-treatment', hasChile: false},
        {title: 'استعلام اصالت بیمه نامه', path: 'check-insurance-policy', hasChile: false},
        {title: 'صدور بیمه نامه های آنلاین', path: 'dashboard1', hasChile: false},
        {title: 'پرداخت اقساط اعلامیه بدهکار', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'فایل ها و برنامه ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'دانلود فرمهای پیشنهاد', path: 'offer-forms', hasChile: false},
        {title: 'دانلود نیازمندیهای سیستم جامع', path: 'download-necessity-files', hasChile: false},
        {title: 'دریافت اپلیکشن همراز', path: 'download-app', hasChile: false},
      ]
    },
    {
      title: 'سوالات متداول', icon: 'fa fa-home', hasChile: true, subMenu: [
        {
          title: 'فنی', hasChile: true, subMenu: [
            {title: 'آتش سوزی', path: 'dashboard1', hasChile: false},
            {title: 'اتومبیل', path: 'dashboard1', hasChile: false},
            {title: 'عمر و زندگی', path: 'dashboard1', hasChile: false},
            {title: 'درمان', path: 'dashboard1', hasChile: false},
            {title: 'باربری', path: 'dashboard1', hasChile: false},
          ]
        },
        {title: 'فناوری اطلاعات', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'برنامه ریزی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'مالی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'پشتیبانی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'بازاریابی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'روابط عمومی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'حقوقی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'بازرسی و کنترل های داخلی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'امور نمایندگان', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'منابع انسانی', path: 'dashboard1', subMenu: [], hasChile: false},

      ]
    },
    {
      title: 'اطلاعات پایه', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مدیریت دسترسی', path: 'dashboard1', hasChile: false},
        {title: 'تعریف اشخاص (حقیقی/حقوقی) ', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'ویژه نمایندگان', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'کارمزد نمایندگان', path: 'dashboard1', hasChile: false},
        {title: 'بارگذاری کارمزد نمایندگان', path: 'dashboard1', hasChile: false},
        {title: 'قرارداد نمایندگان', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'ویژه شعب', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'خلاصه عملکرد شعب', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'در خواست ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'سئوالات فنی(بیمه ای)', path: 'dashboard1', hasChile: false},
        {title: 'درخواست ملزومات اداری', path: 'dashboard1', hasChile: false},
      ]
    },
    {title: 'مناقصات', icon: 'fa fa-home', path: 'dashboard', subMenu: [], hasChile: false},
  ];
  menuItem = [
    {
      title: 'اطلاع رسانی', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مراکز درمانی', path: 'health-centers', hasChile: false},
        {title: 'نمایندگان', path: 'agencies', hasChile: false},
        {title: 'شعب', path: 'dashboard1', hasChile: false},
        {title: 'خدمات بیمه ای', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'خدمات بیمه ای', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'استعلام اصالت بیمه نامه', path: 'check-insurance-policy', hasChile: false},
        {title: 'صدور بیمه نامه های آنلاین', path: 'dashboard1', hasChile: false},
        {title: 'پرداخت اقساط اعلامیه بدهکار', path: 'dashboard1', hasChile: false},
      ]
    },
    {
      title: 'فایل ها و برنامه ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'دانلود فرمهای پیشنهاد', path: 'offer-forms', hasChile: false},
        {title: 'دانلود نیازمندیهای سیستم جامع', path: 'download-necessity-files', hasChile: false},
        {title: 'دریافت اپلیکشن همراز', path: 'download-app', hasChile: false},
      ]
    },
    {
      title: 'سوالات متداول', icon: 'fa fa-home', hasChile: true, subMenu: [
        {
          title: 'فنی', hasChile: true, subMenu: [
            {title: 'آتش سوزی', path: 'dashboard1', hasChile: false},
            {title: 'اتومبیل', path: 'dashboard1', hasChile: false},
            {title: 'عمر و زندگی', path: 'dashboard1', hasChile: false},
            {title: 'درمان', path: 'dashboard1', hasChile: false},
            {title: 'باربری', path: 'dashboard1', hasChile: false},
          ]
        },
        {title: 'فناوری اطلاعات', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'برنامه ریزی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'مالی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'پشتیبانی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'بازاریابی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'روابط عمومی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'حقوقی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'بازرسی و کنترل های داخلی', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'امور نمایندگان', path: 'dashboard1', subMenu: [], hasChile: false},
        {title: 'منابع انسانی', path: 'dashboard1', subMenu: [], hasChile: false},

      ]
    },
    {
      title: 'در خواست ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'سئوالات فنی(بیمه ای)', path: 'dashboard1', hasChile: false},
        {title: 'درخواست ملزومات اداری', path: 'dashboard1', hasChile: false},
      ]
    },
  ];
  subscribe;

  constructor(private tokenService: TokenService) {

  }


  ngOnInit() {
    this.getToken();
    this.token = localStorage.getItem('token');
    this.hasLogin = this.token;
    if (this.token === undefined || this.token === null) {
      this.menu = [...this.menuItem];
    } else {
      this.menu = [...this.menuItemLogin];
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  onClick() {
    window.location.href = 'http://faranam.net/';
  }

  getToken() {
    this.tokenService.getMessage().subscribe((res) => {
      this.hasLogin = res;

      if (res === null) {
        this.menu = [...this.menuItem];
      } else {
        this.menu = [...this.menuItemLogin];
      }
    });
  }

}
