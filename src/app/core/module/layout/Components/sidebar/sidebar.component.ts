import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu = [
    {title: 'شرکت در مناقصات', icon: 'sm-icon pe-7s-rocket', path: '', subMenu: []},
    {title: 'تالار گفتگو', icon: 'sm-icon pe-7s-rocket', path: '', subMenu: []},
    {title: 'مکاتبات', icon: 'sm-icon pe-7s-rocket', path: ''},
  ];

  constructor() {

  }


  ngOnInit() {

  }

  onClick() {
    window.location.href = 'http://faranam.net/';
  }

}
