import { Component, Input } from "@angular/core";
import { Message } from "../models/message.model";
import { FormsModule } from "@angular/forms";

@Component({
        selector: 'app-message',
        styleUrl: 'message.component.css',
        templateUrl: 'message.component.html',
        standalone: true,
        imports:[ FormsModule ]
    })

export class MessageComponent 
{
    @Input() messageVarClasse = new Message("","");
}