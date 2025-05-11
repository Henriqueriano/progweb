import { FormsModule, NgForm } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';
@Component(
  {
      selector: 'message-input',
      standalone: true,
      imports: [FormsModule],
      templateUrl: 'message-input.component.html',
      styleUrl: 'message-input.component.css',
      styles: 'input.ng-invalid.ng-touched { border: 1px solid red; }'
  })

export class MessageInputComponent
{
  private _messageService = inject(MessageService);
  onSubmit(form: NgForm)
  {
    const message : Message = new Message(form.value.myContentngForm, 'Daniel H');
    this._messageService.addMessage(message).subscribe({error: (dadosErro: any) => 
        {
          console.log(`$== !!Error (subscribe): - ${dadosErro.info_extra} ==`)
          console.log(dadosErro);
        }
    });
    form.resetForm();
  }
 }
