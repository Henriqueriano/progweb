import { Component } from '@angular/core';
@Component(
  {
  selector: 'app-authnetication',
  standalone: true,
  template: `
    <h1>Componente de Autenticação</h1>
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
          <li><a > SigUp</a></li>
          <li><a > SigIn</a></li>
          <li><a > LogOut</a></li>
        </ul>
      </nav>
    </header>
  `
  })
export class AuthenticationComponent
{

}
