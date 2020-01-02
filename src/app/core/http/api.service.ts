import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import * as appSetting from '../../config/app-setting.json';
import {AlertService} from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  static self;

  constructor(private http: HttpClient,
              private alertService: AlertService) {
    ApiService.self = this;
  }

  private API_URL = appSetting.apiUrl;
  private LOGIN_URL = 'http://89.32.248.230:80';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptionsInsert = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  public get(url: string, params?: any): Observable<T> {
    const jsonParam = (params) ? JSON.stringify(params) : '';
    const urls = jsonParam ? url + '/' + jsonParam : url;
    return this.http.get<T>(`${this.API_URL}/${urls}`, this.httpOptions)
      .pipe(
        map((r: any) => {
            if (r.StatusCode === 200) {
              return r;
            } else {
              throw new Error(r.Message);
            }
          }
        ),
        // retry(1),
        catchError(this.handleError)
      );
  }

  public getById(url: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${url}+${id}`, this.httpOptions)
      .pipe(
        map((r: any) => {
          if (r.StatusCode === 200) {
            return r;
          } else {
            throw new Error(r.Message);
          }
        }),
        // retry(1),
        catchError(this.handleError)
      );
  }


  public post(url: string, obj: T): Observable<T> {
    return this.http.post<T>(`${this.API_URL}/${url}`, obj, this.httpOptions)
      .pipe(
        map((r: any) => {
            if (r.StatusCode === 200) {
              return r;
            } else {
              throw new Error(r.Message);
            }
          }
        ),
        // retry(1),
        catchError(this.handleError)
      );
  }

  public postLogin(url: string, obj: T): Observable<T> {
    return this.http.post<T>(`http://89.32.248.230:80/${url}`, obj, this.httpOptions)
      .pipe(
        map((r: any) => {
            if (r.StatusCode === 200) {
              return r;
            } else {
              throw new Error(r.Message);
            }
          }
        ),
        // retry(1),
        catchError(this.handleError)
      );
  }


  public put(url: string, obj: T): Observable<T> {
    const jsonParam = (obj) ? JSON.stringify(obj) : '';
    return this.http.put<T>(`${this.API_URL}/${url}`, jsonParam, this.httpOptions)
      .pipe(
        map((r: any) => {
            if (r.StatusCode === 200) {
              return r;
            } else {
              throw new Error(r.Message);
            }
          }
        ),
        // retry(1),
        catchError(this.handleError)
      );
  }

  public delete(url: string, id: string): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}/${url}/${id}`, this.httpOptions)
      .pipe(
        map((r: any) => {
            if (r.StatusCode === 200) {
              return r;
            } else {
              throw new Error(r.Message);
            }
          }
        ),
        // retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = [];
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.status === 404 || error.status === '404') {
      errorMessage = [`برقراری ارتباط با سرور مقدور نمیباشد`];
      ApiService.self.alertService.error(errorMessage);
    } else if (error.message === null || error.message === 'null') {
      errorMessage = [`برقراری ارتباط با سرور مقدور نمیباشد`];
    } else {
      errorMessage = error.message;
      ApiService.self.alertService.error(errorMessage);
    }
    return throwError(errorMessage);
  }


}
