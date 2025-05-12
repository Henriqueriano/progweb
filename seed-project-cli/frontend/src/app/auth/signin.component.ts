import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector:'app-signin',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit 
{
  myFormIn! : FormGroup;
  constructor(private fb: FormBuilder, public _authService: AuthService, public _cookirService : CookieService) {}
  ngOnInit(): void {
    this.myFormIn = this.fb.group({
      emailTS: ['', [Validators.required, Validators.email]],
      passwordTS: [null, Validators.compose([ Validators.required, Validators.minLength(4), this.minusculoFValidator])]
    });
  }
  async onSubmit() {
    await this._authService.logIn(this.myFormIn);
    this.myFormIn.reset();
  }
  minusculoFValidator(control: AbstractControl) {
   const pass = control.value as string;

   if ((pass !== pass?.toLowerCase()) && (pass !== null)) {
    return { minusculoF: true };
  }
  return null;
}
}
