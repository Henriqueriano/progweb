import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-logout',
  standalone: true,
  template: `
  <br>
  <div class="col-md-8 col-md-offset-2">
  <button class="btn btn-danger mx-5" (click)="onLogout()">Logout</button>
  </div>`
})
export class LogoutComponent
{
  constructor(public _cookieService: CookieService) {}
  onLogout() {
    this._cookieService.deleteAll();
    console.log("Você fez logOut!");
  }
}
