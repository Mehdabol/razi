import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../../../../module/auth/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-components.scss']
})
export class HeaderComponent implements OnInit{
  token = '';
  hasLogin;

  constructor(private router: Router,
              private tokenService: TokenService) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.getToken();
    this.token = localStorage.getItem('token');
    this.hasLogin = this.token;
  }

  onSingOut() {
    localStorage.removeItem('token');
    this.tokenService.sendMessage(null);
    this.token = null;
    window.location.href = '';

  }

  getToken() {
    this.tokenService.getMessage().subscribe((res) => {
      this.hasLogin = res;
    });
  }

  onLogin() {
    this.router.navigate(['/pages/login']);
  }

  onchangePass() {
    this.router.navigate(['/pages/change-password']);

  }
}
