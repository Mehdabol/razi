import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onGetGrid() {
    this.router.navigate(['/pages/notification/1']);
  }

}
