import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

@Component({
  imports: [CommonModule, ReactiveFormsModule, BreadcrumbComponent],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  showPassword = false;
  submitted = false;
  currentUrl: string;
  loginForm;
  banner = {
    title: 'Login',
    subtitle: 'Have questions or need assistance? Get in touch with our team. We are here to help you find the right solutions for your business.'
  };


  constructor(private fb: FormBuilder, private router: Router) {
    this.currentUrl = this.router.url;
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      rememberMe: [false]
    });
  }



  get f() {
    return this.loginForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Login Details:', this.loginForm.value);

    // Integrate your Login API here
  }
}
