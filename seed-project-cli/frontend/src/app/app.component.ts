import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { HeaderComponent } from './header.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent implements OnInit
{
  private BASE_URL : string = 'http://localhost:3000';
  title : string = 'frontend';
  serverStatus : any = false;
  constructor (public service : MessageService, public _http: HttpClient) {}
  // messages : any = this.service.getMessage().subscribe({next: (r) => {return r;}, error: (r) => {console.log(r);}});

  ngOnInit(): void {
    this._http.get(`${this.BASE_URL}/health`).subscribe({next: (response) => {this.serverStatus = response;}, error: (r) => {this.serverStatus = false}});

    // Checagem do Status do servidor:
    setTimeout(()=> this.ngOnInit(), 5000);
  }
}
