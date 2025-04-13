import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './messages/message.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'frontend'
}
  