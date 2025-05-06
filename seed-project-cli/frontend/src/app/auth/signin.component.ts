import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector:'app-signin',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit 
{
  myFormIn! : FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.myFormIn = this.fb.group({
      emailTS: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      passwordTS: [null, Validators.compose([ Validators.required, Validators.minLength(4), this.minusculoFValidator])]
    });
  }
  onSubmit() {
    console.log(this.myFormIn.value);
  }
  minusculoFValidator(control: AbstractControl) {
   const pass = control.value as string;

   if ((pass !== pass?.toLowerCase()) && (pass !== null)) {
    return { minusculoF: true };
  }
  return null;
}
}
