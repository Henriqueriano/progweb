import { Component, EventEmitter, input} from '@angular/core';
import { Message } from '../models/message.model';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'message-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './message-list.component.html',
    styleUrl: './message-list.component.css'
    })
export class MessageListComponent
{
    messageVarClasse = input<Message>(new Message("",""));
    constructor() {}
}
