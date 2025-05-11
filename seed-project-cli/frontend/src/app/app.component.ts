import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { HeaderComponent } from './header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent
{
  title = 'frontend';
  constructor (private service : MessageService) {}
  messages : any = this.service.getMessage().subscribe({next: (r) => {return r;}, error: (r) => {console.log(r);}});
}
