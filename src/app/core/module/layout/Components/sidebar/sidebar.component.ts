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
    {title: 'مناقصات', icon: 'fa fa-home', subMenu: []},
    {title: 'Issue Tracker', icon: 'fa fa-home', subMenu: []},
    {title: 'سوالات متداول', icon: 'fa fa-home', subMenu: []},
  ];
  menuItem = [
    {
      title: 'اطلاع رسانی', icon: 'fa fa-home', subMenu: [
        {title: 'مراکز درمانی', path: 'dashboard'},
        {title: 'نمایندگان', path: 'dashboard'},
        {title: 'شعب', path: 'dashboard'},
        {title: 'خدمات بیمه ای', path: 'dashboard'},
      ]
    },
    {
      title: 'خدمات بیمه ای', icon: 'fa fa-home', subMenu: [
        {title: 'بیمه های من', path: 'dashboard'},
        {title: 'بررسی اصالت بیمه', path: 'dashboard'},
        {title: 'صدور بیمه نامه های آنلاین', path: 'dashboard'},
        {title: 'پرداخت اقساط اعلامیه بدهکار', path: 'dashboard'},
        {title: 'خسارت های درمانی', path: 'dashboard'},
      ]
    },
    {
      title: 'فایل ها و برنامه ها', icon: 'fa fa-home', subMenu: [
        {title: 'دانلود فرمهای پیشنهاد', path: 'dashboard'},
        {title: 'دانلود نیازمندیهای سیستم جامع', path: 'dashboard'},
        {title: 'دریافت اپلیکشن همراز', path: 'dashboard'},
        {title: 'اتوماسیون های اداری', path: 'dashboard'},
      ]
    },
    {
      title: 'سوالات متداول برای همه', icon: 'fa fa-home', subMenu: [
        {
          title: 'فنی', subMenu: [
            {title: 'آتش سوزی', path: 'dashboard'},
            {title: 'اتومبیل', path: 'dashboard'},
            {title: 'عمر و زندگی', path: 'dashboard'},
            {title: 'درمان', path: 'dashboard'},
            {title: 'باربری', path: 'dashboard'},
          ]
        },
        {title: 'فناوری اطلاعات', path: 'dashboard', subMenu: []},
        {title: 'مالی', path: 'dashboard', subMenu: []},
        {title: 'پشتیبانی', path: 'dashboard', subMenu: []},
        {title: 'بازاریابی', path: 'dashboard', subMenu: []},
        {title: 'روابط عمومی', path: 'dashboard', subMenu: []},
        {title: 'حقوقی', path: 'dashboard', subMenu: []},
        {title: 'بازرسی و کنترل های داخلی', path: 'dashboard', subMenu: []},
        {title: 'امور نمایندگان', path: 'dashboard', subMenu: []},
        {title: 'منابع انسانی', path: 'dashboard', subMenu: []},

      ]
    },
    {
      title: 'اطلاعات پایه', icon: 'fa fa-home', subMenu: [
        {title: 'مدیریت دسترسی', path: 'dashboard'},
        {title: 'تعریف اشخاص (حقیقی/حقوقی) ', path: 'dashboard'},
      ]
    },
    {
      title: 'ویژه نمایندگان', icon: 'fa fa-home', subMenu: [
        {title: 'کارمزد نمایندگان', path: 'dashboard'},
        {title: 'بارگذاری کارمزد نمایندگان', path: 'dashboard'},
        {title: 'قرارداد نمایندگان', path: 'dashboard'},
      ]
    },
    {
      title: 'ویژه شعب', icon: 'fa fa-home', subMenu: [
        {title: 'خلاصه عملکرد شعب', path: 'dashboard'},
      ]
    },
    {
      title: 'در خواست ها', icon: 'fa fa-home', subMenu: [
        {title: 'سئوالات فنی(بیمه ای)', path: 'dashboard'},
        {title: 'درخواست ملزومات اداری', path: 'dashboard'},
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
      this.menu = this.menuItem;
    } else {
      this.menu = this.menuItemLogin;
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
        this.menu = this.menuItem;
      } else {
        this.menu = this.menuItemLogin;
      }
    });
  }

}
