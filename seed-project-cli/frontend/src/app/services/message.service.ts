import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable()
export class MessageService
{
    private messages : Message[] = [];
    addMessage(message: Message)
    {
      this.messages.push(message);
      console.log('Mensagem registrada com sucesso!');
    }

    deleteMessage(message: Message)
    {
      this.messages.splice(this.messages.indexOf(message),1);
      console.log(`Mensagem ${message} deletada com exito!`);
    }

    getMessage() : Message[]
    {
      return this.messages;
    }
}
