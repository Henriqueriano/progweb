import { Injectable, inject } from '@angular/core';
import { Message } from '../models/message.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
@Injectable()
export class MessageService
{
    private BASE_URL : string = 'http://localhost:3000'; 
    private messages : Message[] = [];
    private _http = inject(HttpClient);
    addMessage(message: Message)
    {
      // console.log(message);
      // this.messages.push(message);
      // console.log(this.messages);
      return this._http.post<any>(`${this.BASE_URL}/messages/saveMessage`, message).pipe(
        catchError((e) => this.errorHandler(e, 'addMessage()'))
      );
    }
    deleteMessage(messageId: string)
    {
      this._http.delete(`${this.BASE_URL}/messages/deleteMessage/${messageId}`).
      subscribe({});
    }
    getMessage() : Observable<Message[]>
    {
      return this._http.get<any>(`${this.BASE_URL}/messages/getMessages`).pipe(
        map((r: any) => {
          const messagesRecieve = r.objsMessageRecuperadas;
          let castedMessages : Message[] = [];
          for (let msg of messagesRecieve)
            castedMessages.push(new Message(msg.content, msg.username, '' ,msg._id));
          this.messages = [...castedMessages]; 
          r.objsMessageRecuperadas = this.messages;
          return r.objsMessageRecuperadas;
        }),
      catchError((e)=>this.errorHandler(e, 'getMessage()'))
      );
    }
   errorHandler(e: any, info: string) : Observable<any> 
   {
      throw({
        info_extra: info,
        error_ss: e,
        error_CS: "Client-Side: errorHandler = Ocorreu um erro!"
      });
   } 
 
}
