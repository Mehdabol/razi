import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    token = '';

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.token = localStorage.getItem('token');

        if (this.token !== '' && this.token !== null) {
            return true;
        } else {
            this.router.navigate(['pages/login']);
            return false;
        }
    }
}
