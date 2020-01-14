import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from './service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  message = [];
  constructor(private router: Router,
              private notiService: NotificationService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      setTimeout(() => {
        this.getNotification();
      }, 100);
      setInterval(() => {
        this.getNotification();
      }, 30000);
    }

  }

  getNotification() {
    this.notiService.getNotification().subscribe((res) => {
      this.message = res.Items;
    });
  }

  readNotification(id) {
    const data = this.message.filter(x => x.ID === id);
    debugger;
  }

}
