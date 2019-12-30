import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class AlertService {
    constructor(private toasterService: ToastrService) {
        this.toasterService.toastrConfig.timeOut = 7000;
    }

    private setTimeout(timeout?: number) {
        this.toasterService.toastrConfig.timeOut = timeout ? timeout : this.toasterService.toastrConfig.timeOut;
        return this.toasterService.toastrConfig;
    }

    public info(message?: string, title?: string, timeout?: number): void {
        this.setTimeout(timeout);
        this.toasterService.info(message, title);
    }

    public success(message?: string, title?: string, timeout?: number): void {
        this.setTimeout(timeout);
        this.toasterService.success(message, title);
    }

    public error(message?: string, title?: string, timeout?: number): void {
        this.setTimeout(timeout);
        this.toasterService.error(message, title);
    }

    public warning(message?: string, title?: string, timeout?: number): void {
        this.setTimeout(timeout);
        this.toasterService.warning(message, title);
    }
}
