import {Injectable} from "@angular/core";
import {ApiService} from "../http/api.service";

@Injectable()
export class NotificationService {
    url = ''

    constructor(private service: ApiService<any>) {
    }

    showNotification() {
        return this.service.get(this.url);
    }
}
