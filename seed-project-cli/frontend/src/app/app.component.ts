import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponentSignal } from './messages-signal/message-signal.component';
import { MessageComponent } from './message/message.component';
import { Message } from './models/message.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageComponent, MessageComponentSignal, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'frontend';
  messageBinding : Message = new Message("Texto da mensagem via signal!","Daniel Henrique");
  messageInputHidden = true;
}
  