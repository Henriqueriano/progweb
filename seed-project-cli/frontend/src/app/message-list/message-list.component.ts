import { Component, EventEmitter, OnInit, input } from '@angular/core';
import { Message } from '../models/message.model';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service';
@Component({
    selector: 'message-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './message-list.component.html',
    styleUrl: './message-list.component.css',
})
export class MessageListComponent implements OnInit
{
    messageVarClasse = input<Message>(new Message('',''));
    messages : Message[] = [];
    constructor(private _messageService : MessageService) {}
    ngOnInit(): void
    {
      this.messages = this._messageService.getMessage();
    }
    edit()
    {
      console.log('foo!');
    }
    delete()
    {
      try
      {
        //this._messageService.deleteMessage(currentMessage);
        console.log('Mensagem deletada com exito!');
      } catch (e) { console.log(`Erro ao deletar mensage: ${e}`);}
    }
}
