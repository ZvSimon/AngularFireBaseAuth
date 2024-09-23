import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router)
  errorMessage:string|null = null;
  loginForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.required],nonNullable: true}),
    password: new FormControl('', {validators: [Validators.required],nonNullable: true}),
  })

  onSubmit():void{
    const rawForm = this.loginForm.getRawValue();
    this.authService.login(rawForm.email,rawForm.password).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/')
        },
        error:(err)=> {
          this.errorMessage = err.code;
        }
      })
  }
}
