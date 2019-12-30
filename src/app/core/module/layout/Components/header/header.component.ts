import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../../../../module/auth/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-components.scss']
})
export class HeaderComponent {
  token = '';

  constructor(private router: Router,
              private tokenService: TokenService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  onSingOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
    this.token = null;
    this.tokenService.sendMessage(null);
  }

  onLogin() {
    this.router.navigate(['/pages/login']);

  }
}
