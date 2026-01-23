import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _builder:FormBuilder = inject(FormBuilder);

  public form: FormGroup = this._builder.group(
    {
      email: ['', [Validators.required, this.validateEmail]], 
      password: ['', [Validators.required, this.validatePassword]]
    }
  ); 

  public validatePassword(control:AbstractControl){
    const value:string = control.value;
    const isValid = value.length >= 8;
    return isValid ? null : { tooShortPassword: true};
  }

  public validateEmail(control:AbstractControl){
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value);
    return isValid ? null : { invalidEmail: true};
  }

  public onSubmit(){
    if( this.form.valid ){
      alert("it is ok");
    }
    else{
      alert("not ok");
    }
  }
}
