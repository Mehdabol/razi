import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-components.scss']
})
export class HeaderComponent {
  token = '';

  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  onSingOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
    this.token = null;
  }

  onLogin() {
    this.router.navigate(['/pages/login']);

  }
}
