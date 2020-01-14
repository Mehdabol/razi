import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from './service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private router: Router,
              private notiService: NotificationService) {
  }

  ngOnInit() {
    // this.getNotification();
    // setInterval(() => {
    //   this.getNotification();
    // }, 3000);
  }

  getNotification() {
    this.notiService.getNotification().subscribe((res) => {
      debugger;
    });
  }

  onGetGrid() {
    this.router.navigate(['/pages/notification/1']);
  }

}
