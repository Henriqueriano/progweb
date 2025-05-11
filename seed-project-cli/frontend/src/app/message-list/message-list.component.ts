import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
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
    @Output() outputMessage = new EventEmitter<string>();
    messages : Message[] = [];
    constructor(private _messageService : MessageService) {}
    ngOnInit(): void
    {
      this._messageService.getMessage()
      .subscribe({
          next: (dataSucess) => 
            {
              this.messages = dataSucess;
            },
          error: (dataErr) => 
            {
              console.log(dataErr);
            }});
            console.log(this.messageVarClasse);
    }
    edit()
    {
      console.log('foo!');
    }
    delete(messageId: any)
    {
      try
      {
        this._messageService.deleteMessage(messageId);
      } 
      catch (e) 
      { 
        console.log(JSON.stringify({'message':'Erro ao deletar mensagem', 'messageId': messageId ,'erro': e}));
      }
    }
}
