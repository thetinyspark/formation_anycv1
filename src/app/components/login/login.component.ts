import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _builder:FormBuilder = inject(FormBuilder);
  private _loginService = inject(LoginServiceService);

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
      this._loginService.login( 
        this.form.get('email')?.value,
        this.form.get('password')?.value
      ); 
    }

    if( this._loginService.isConnected()){
      alert("User connected");
    }
    else{
      alert("User disconnected");
    }
  }
}
