import { Component, EventEmitter, input, Output } from "@angular/core";
import { Message } from "../models/message.model";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-message-signal',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './message-signal.component.html',
    styleUrl: './message-signal.component.css'
    })
export class MessageComponentSignal
{
    messageVarClasse = input<Message>(new Message("",""));
    @Output() outputMessage = new EventEmitter<string>();

    constructor() {}
    onEdit() 
    {
        this.outputMessage.emit(`Texto retornado: venho de message-signal (child) pra o app (pai)`);
    }
}