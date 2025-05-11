import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";

@Injectable()
export class AuthService 
{
    private BASE_URL : string = 'http://localhost:3000'; 
    constructor(public _http: HttpClient) {}
    async registerAccount(form: FormGroup) 
    {
        let newUser : User = new User(form.controls['emailTS'].value,
             form.controls['passwordTS'].value,
             form.controls['firstNameTS'].value,
             form.controls['lastNameTS'].value);
        this._http.post<any>(`${this.BASE_URL}/auth/registerAccount`, newUser)
        .subscribe({
            next: (r) => 
                {
                    console.log(r);
                },
            error: (e) => 
                {
                    console.log(e);
                }});
    }
}
