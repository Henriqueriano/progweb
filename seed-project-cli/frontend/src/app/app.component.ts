import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { Message } from './models/message.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageListComponent, MessageInputComponent, RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  mostrarElemento : boolean = true;
  public messageS : Message[] = [new Message('Daniel H','Dh'), new Message('Dh','Daniel H')];
  title = 'frontend';

  onClickMuda()
  {
    this.mostrarElemento = !this.mostrarElemento;
  }
}

