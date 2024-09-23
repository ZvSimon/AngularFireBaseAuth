import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export class RegistrerComponent {
  authService = inject(AuthService)
  router = inject(Router)
  registerForm = new FormGroup({
    username: new FormControl('', {validators: [Validators.required],nonNullable: true}),
    email: new FormControl('', {validators: [Validators.required],nonNullable: true}),
    password: new FormControl('', {validators: [Validators.required],nonNullable: true}),
  })
  errorMessage :string|null = null;


  onSubmit():void{
    const rawForm = this.registerForm.getRawValue();
    this.authService.register(rawForm.email,rawForm.username,rawForm.password).subscribe(
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
