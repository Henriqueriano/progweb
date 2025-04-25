import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { Message } from './models/message.model';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageListComponent, MessageInputComponent, RouterOutlet, CommonModule],
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

