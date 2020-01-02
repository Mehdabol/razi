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
  menuItemLogin = [

    {
      title: 'اطلاع رسانی', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مراکز درمانی', path: 'dashboard', hasChile: false},
        {title: 'نمایندگان', path: 'dashboard', hasChile: false},
        {title: 'شعب', path: 'dashboard', hasChile: false},
        {title: 'خدمات بیمه ای', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'خدمات بیمه ای', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'بیمه های من', path: 'dashboard', hasChile: false},
        {title: 'بررسی اصالت بیمه', path: 'dashboard', hasChile: false},
        {title: 'صدور بیمه نامه های آنلاین', path: 'dashboard', hasChile: false},
        {title: 'پرداخت اقساط اعلامیه بدهکار', path: 'dashboard', hasChile: false},
        {title: 'خسارت های درمانی', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'فایل ها و برنامه ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'دانلود فرمهای پیشنهاد', path: 'dashboard', hasChile: false},
        {title: 'دانلود نیازمندیهای سیستم جامع', path: 'dashboard', hasChile: false},
        {title: 'دریافت اپلیکشن همراز', path: 'dashboard', hasChile: false},
        {title: 'اتوماسیون های اداری', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'سوالات متداول', icon: 'fa fa-home', hasChile: true, subMenu: [
        {
          title: 'فنی', hasChile: true, subMenu: [
            {title: 'آتش سوزی', path: 'dashboard', hasChile: false},
            {title: 'اتومبیل', path: 'dashboard', hasChile: false},
            {title: 'عمر و زندگی', path: 'dashboard', hasChile: false},
            {title: 'درمان', path: 'dashboard', hasChile: false},
            {title: 'باربری', path: 'dashboard', hasChile: false},
          ]
        },
        {title: 'فناوری اطلاعات', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'برنامه ریزی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'مالی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'پشتیبانی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'بازاریابی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'روابط عمومی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'حقوقی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'بازرسی و کنترل های داخلی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'امور نمایندگان', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'منابع انسانی', path: 'dashboard', subMenu: [], hasChile: false},

      ]
    },
    {
      title: 'اطلاعات پایه', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مدیریت دسترسی', path: 'dashboard', hasChile: false},
        {title: 'تعریف اشخاص (حقیقی/حقوقی) ', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'ویژه نمایندگان', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'کارمزد نمایندگان', path: 'dashboard', hasChile: false},
        {title: 'بارگذاری کارمزد نمایندگان', path: 'dashboard', hasChile: false},
        {title: 'قرارداد نمایندگان', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'ویژه شعب', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'خلاصه عملکرد شعب', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'در خواست ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'سئوالات فنی(بیمه ای)', path: 'dashboard', hasChile: false},
        {title: 'درخواست ملزومات اداری', path: 'dashboard', hasChile: false},
      ]
    },
    {title: 'مناقصات', icon: 'fa fa-home', subMenu: [], hasChile: false},
    {title: 'Issue Tracker', icon: 'fa fa-home', subMenu: [], hasChile: false},
    {title: 'سوالات متداول', icon: 'fa fa-home', subMenu: [], hasChile: false},
  ];
  menuItem = [
    {
      title: 'اطلاع رسانی', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مراکز درمانی', path: 'dashboard', hasChile: false},
        {title: 'نمایندگان', path: 'dashboard', hasChile: false},
        {title: 'شعب', path: 'dashboard', hasChile: false},
        {title: 'خدمات بیمه ای', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'خدمات بیمه ای', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'بررسی اصالت بیمه', path: 'dashboard', hasChile: false},
        {title: 'صدور بیمه نامه های آنلاین', path: 'dashboard', hasChile: false},
        {title: 'پرداخت اقساط اعلامیه بدهکار', path: 'dashboard', hasChile: false},
        {title: 'خسارت های درمانی', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'فایل ها و برنامه ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'دانلود فرمهای پیشنهاد', path: 'dashboard', hasChile: false},
        {title: 'دانلود نیازمندیهای سیستم جامع', path: 'dashboard', hasChile: false},
        {title: 'دریافت اپلیکشن همراز', path: 'dashboard', hasChile: false},
        {title: 'اتوماسیون های اداری', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'سوالات متداول', icon: 'fa fa-home', hasChile: true, subMenu: [
        {
          title: 'فنی', hasChile: true, subMenu: [
            {title: 'آتش سوزی', path: 'dashboard', hasChile: false},
            {title: 'اتومبیل', path: 'dashboard', hasChile: false},
            {title: 'عمر و زندگی', path: 'dashboard', hasChile: false},
            {title: 'درمان', path: 'dashboard', hasChile: false},
            {title: 'باربری', path: 'dashboard', hasChile: false},
          ]
        },
        {title: 'فناوری اطلاعات', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'برنامه ریزی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'مالی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'پشتیبانی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'بازاریابی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'روابط عمومی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'حقوقی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'بازرسی و کنترل های داخلی', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'امور نمایندگان', path: 'dashboard', subMenu: [], hasChile: false},
        {title: 'منابع انسانی', path: 'dashboard', subMenu: [], hasChile: false},

      ]
    },
    {
      title: 'اطلاعات پایه', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'مدیریت دسترسی', path: 'dashboard', hasChile: false},
        {title: 'تعریف اشخاص (حقیقی/حقوقی) ', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'ویژه نمایندگان', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'کارمزد نمایندگان', path: 'dashboard', hasChile: false},
        {title: 'بارگذاری کارمزد نمایندگان', path: 'dashboard', hasChile: false},
        {title: 'قرارداد نمایندگان', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'ویژه شعب', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'خلاصه عملکرد شعب', path: 'dashboard', hasChile: false},
      ]
    },
    {
      title: 'در خواست ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'سئوالات فنی(بیمه ای)', path: 'dashboard', hasChile: false},
        {title: 'درخواست ملزومات اداری', path: 'dashboard', hasChile: false},
      ]
    },
  ];
  subscribe;

  constructor(private tokenService: TokenService) {

  }


  ngOnInit() {
    this.getToken();
    this.token = localStorage.getItem('token');
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
      if (res === null) {
        this.menu = [...this.menuItem];
      } else {
        this.menu = [...this.menuItemLogin];
      }
    });
  }

}
