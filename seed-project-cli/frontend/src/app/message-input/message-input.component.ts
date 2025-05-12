import { FormsModule, NgForm } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';
import { CookieService } from 'ngx-cookie-service';
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
  private _cookieService = inject(CookieService);
  onSubmit(form: NgForm)
  {
    let userName = this._cookieService.get('userName');
    console.log(userName);
    if (userName === '')
      userName = 'Anonymus User';
    const message : Message = new Message(form.value.myContentngForm, userName);
    this._messageService.addMessage(message).subscribe({error: (dadosErro: any) => 
        {
          console.log(`$== !!Error (subscribe): - ${dadosErro.info_extra} ==`)
          console.log(dadosErro);
        }
    });
  }
 }
