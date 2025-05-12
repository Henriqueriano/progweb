import {Component, inject, OnInit} from '@angular/core';
import {MessageListComponent} from '../message-list/message-list.component';
import {MessageInputComponent} from '../message-input/message-input.component';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';
import { Router } from '@angular/router';
@Component(
  {
    selector: 'app-message',
    standalone: true,
    imports: [MessageListComponent,MessageInputComponent],
    templateUrl: './message.component.html',
    styleUrl: './message.component.css'
  })
export class MessageComponent implements OnInit
{
  // Gambiarra:
  _messageService = inject(MessageService);
  _route = inject(Router);

  messages : Message[] = []; 
  ngOnInit() 
  {
    this._messageService.getMessage()
    .subscribe(
      {next: (r) => { this.messages = r;},
      error: (r) => {console.log(r);}});

          
    // Delay ao carregar novas mensagens
    // Ficar sempre recarregando o componente para garantir que sempre chegarão novas mensagens
    // PSEUDO-SOCKET!
      if(this._route.url.endsWith('mensagens'))
        setTimeout(() => this.ngOnInit(), 1000);  
  }
  // Fim da Gambira (A Aline Deixou) 
  
}
