import {Component, inject, OnInit} from '@angular/core';
import {MessageListComponent} from '../message-list/message-list.component';
import {MessageInputComponent} from '../message-input/message-input.component';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';
@Component(
  {
    selector: 'app-message',
    standalone: true,
    imports: [MessageListComponent,MessageInputComponent],
    template: `
      <div class='row'>
        <message-input></message-input>
      </div>
      <hr/>
      <div class='row'>
      @for (msg of messages; track msg) 
      {
        <message-list [messageVarClasse]="msg" (outputMessage) ="msg.content = $event"></message-list>
      } @empty {
        Não há mensagens!
      }
      </div>
    `
  })
export class MessageComponent implements OnInit
{
  // Gambiarra:
  _messageService = inject(MessageService);
  messages : Message[] = [];
  ngOnInit() 
  {
    this.messages = this._messageService.getMessage();
  }
  // Fim da Gambira (A Aline Deixou) 
  
}
