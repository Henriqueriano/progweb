import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component(
  {
  selector: 'app-authnetication',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <h1>Componente de Autenticação</h1>
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
          <li><a class="nav-link" routerLinkActive="active" [routerLink] = "['signup']"> SigUp</a></li>
          <li><a class="nav-link" routerLinkActive="active" [routerLink] = "['signin']"> SigIn</a></li>
          <li><a class="nav-link" routerLinkActive="active" [routerLink] = "['logout']"> LogOut</a></li>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `
  })
export class AuthenticationComponent
{

}
