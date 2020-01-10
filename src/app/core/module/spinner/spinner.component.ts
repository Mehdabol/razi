import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SpinnerService} from './service/spinner.service';
import {Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent  implements OnInit , OnDestroy  {

  show = false;
  private subscription: Subscription;
  constructor(private spinerService: SpinnerService ,
              private router: Router) {}
  ngOnInit() {
    this.subscription = this.spinerService.loaderState
      .subscribe((state: boolean) => {
        this.show = state;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
