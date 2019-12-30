import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    if (token !== '' && token !== null ) {
      const authReq = request.clone({headers: request.headers.set('AuthToken', token)});
      // const authReq = request.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }


  }
}
