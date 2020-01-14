import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {SpinnerService} from '../module/spinner/service/spinner.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(
        private spinnerService: SpinnerService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('GetNotifications')) {
          this.showLoader();
        }
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.onEnd();
                }
            },
            (err: any) => {
                this.onEnd();
            }));
    }

    onEnd(): void {
        this.hideLoader();
    }

    showLoader(): void {
        this.spinnerService.show();
    }

    hideLoader(): void {
        this.spinnerService.hide();
    }

}
