import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
@Component(
  {
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './signup.component.html'
  })

  export class SignupComponent implements OnInit 
  {
    myForm! : FormGroup;
    ngOnInit(): void {
      this.myForm = new FormGroup({
        firsNameTS: new FormControl(null, Validators.required),
        lastNameTS: new FormControl(null, [
         Validators.required,
         Validators.minLength(4), 
         Validators.maxLength(16) 
        ]),
        emailTS: new FormControl(null, [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4]')
        ]),
        passwordTS: new FormControl(null, Validators.required)
      });
    }
    onSubmit()
    {
      console.log(this.myForm);
      this.myForm.reset();
    }
  }
