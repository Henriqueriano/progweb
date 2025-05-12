import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component(
  {
  selector: 'app-authnetication',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl:'./authentication.component.html'
  })
export class AuthenticationComponent
{

}
