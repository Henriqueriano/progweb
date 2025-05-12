import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component(
  {
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './signup.component.html'
  })

  export class SignupComponent implements OnInit 
  {
    userLogedIn : any = '-';
    constructor(public _authService: AuthService ) {}
    myForm! : FormGroup;
    ngOnInit(): void {
      this.myForm = new FormGroup({
        firstNameTS: new FormControl(null, Validators.required),
        lastNameTS: new FormControl(null, [
         Validators.required,
         Validators.minLength(4), 
         Validators.maxLength(16) 
        ]),
        emailTS: new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
        passwordTS: new FormControl(null, Validators.required)
      });
    }
    async onSubmit() 
    {
      this._authService.registerAccount(this.myForm);
      this.myForm.reset();
    }
  }
