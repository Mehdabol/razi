import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SpinnerService} from './service/spinner.service';
import {Router, NavigationStart} from '@angular/router';
import {filter, take} from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent  implements OnInit , OnDestroy  {

  show = false;
  private subscription: Subscription;
  constructor(private spinerService: SpinnerService ,
              private router: Router) {
      router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
          .subscribe((e) => {
              this.show = true;
          });
  }
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
