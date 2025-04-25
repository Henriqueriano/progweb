import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model'
@Component(
  {
      selector: 'message-input',
      standalone: true,
      templateUrl: 'message-input.component.html',
      styleUrl: 'message-input.component.css',
  })

export class MessageInputComponent
{
  private _messageService = inject(MessageService);
  onSave(textoConsole: string)
  {
      const message : Message = new Message(textoConsole, 'Daniel H');
      this._messageService.addMessage(message);
      console.log(this._messageService.getMessage());
  }
}
