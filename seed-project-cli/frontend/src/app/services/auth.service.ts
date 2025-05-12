import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthService 
{
    private BASE_URL : string = 'http://localhost:3000'; 
    userLoged : object = {};
    constructor(public _http: HttpClient, public _cookieService : CookieService) {}
    registerAccount(form: FormGroup) : void
    {
        let newUser : User = new User(form.controls['emailTS'].value,
             form.controls['passwordTS'].value,
             form.controls['firstNameTS'].value,
             form.controls['lastNameTS'].value);
        this._http.post<any>(`${this.BASE_URL}/auth/registerAccount`, newUser)
        .subscribe({ error: (e) => { console.log(e); }});
    }

    async logIn(form: FormGroup) 
    {
        console.log(form);
        this._http.get<any>(`${this.BASE_URL}/auth/getUserInfo/${form.controls['emailTS'].value}`)
        .subscribe(async res =>  {
            console.log(res.email, res.senha, form.controls['passwordTS'].value, form.controls['emailTS'].value);
            if(form.controls['emailTS'].value == res.email && form.controls['passwordTS'].value == res.senha) 
            {
                this._cookieService.set('userName',`${res.nome}`);
                console.log('Logado com sucesso!');
            } 
            else 
            {
                console.log('Falha no login, dados incorretos!');
            }
        });
    }
}
