import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from './service/notification.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  message = [];
  modalContent;
  constructor(private router: Router,
              private modalService: NgbModal,
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

  readNotification(id, modalContent) {
    this.modalContent = modalContent;
    const data = this.message.filter(x => x.ID === id);
    this.notiService.readNotification(id).subscribe((res) => {
      debugger;
    })
    // this.open();
    // debugger;
  }

  open() {
    this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title'});
  }


}
