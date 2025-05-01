import {Component} from '@angular/core';
import {MessageListComponent} from '../message-list/message-list.component';
import {MessageInputComponent} from '../message-input/message-input.component';
@Component(
  {
    selector: 'app-message',
    standalone: true,
    imports: [MessageListComponent,MessageInputComponent],
    template: `
      <div class='row'>
        <message-input></message-input>
      </div>
      <hr/>
      <div class='row'>
        <message-list></message-list>
      </div>
    `
  })
export class MessageComponent {}
