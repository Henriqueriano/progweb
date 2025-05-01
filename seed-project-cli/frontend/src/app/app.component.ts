import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './models/message.model';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageComponent, HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent
{
  title = 'frontend';
  constructor (private service : MessageService) {}
  messages : Message[] = this.service.getMessage();
}

