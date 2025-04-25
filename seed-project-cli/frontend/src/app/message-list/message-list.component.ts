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
    messages : Message[] = [ new Message('Xereca','peida n')]
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
      console.log('foo!');
    }
}
