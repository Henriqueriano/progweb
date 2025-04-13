// Lógica do componente de mensagens
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
@Component(
    {
        selector:'app-message',
        standalone: true,
        imports: [FormsModule],
        templateUrl: "./message.component.html",
        styleUrl: "./message.component.css"
    }
)
export class MessageComponent 
{
    message = 
    {
      content: undefined,
      author: undefined
    }
}