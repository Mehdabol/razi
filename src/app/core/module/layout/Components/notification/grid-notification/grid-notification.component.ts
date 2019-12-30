import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grid-notification',
  templateUrl: './grid-notification.component.html',
  styleUrls: ['./grid-notification.component.scss']
})
export class GridNotificationComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router) {
  }

  ngOnInit() {
  }

  onOpenModal(event) {
    this.modalService.open(event);
  }


  onCloseModal(event) {
    this.modalService.dismissAll(event);
  }

  openModal(event) {
    this.modalService.open(event);
  }

  onBack() {
    this.router.navigate(['/pages/dashboard']);
  }
}
