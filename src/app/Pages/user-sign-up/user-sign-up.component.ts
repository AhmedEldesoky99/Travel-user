import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignUpService } from '../../services/auth/sign-up.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
})
export class UserSignUpComponent implements OnInit {
  flag: boolean;

  constructor(private signUpService: SignUpService, private router: Router) {
    this.flag = true;
  }

  ngOnInit(): void {}

  validationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isValidPassword(values: any) {
    const { password, confirm_password } = values;

    return password === confirm_password;
  }

  signUp() {
    if (this.isValidPassword(this.validationForm.value)) {
      this.flag = true;
      this.signUpService.addUser(this.validationForm.value).subscribe({
        next: (res) => {
          Swal.fire('Good job!', 'You are signed up !', 'success');
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'please refresh the website',
          });
        },
      });
      console.log(this.validationForm.value);
    } else {
      console.log('Password Not Matched');
    }
  }

  checkForm() {
    if (this.validationForm.valid) {
      this.signUp();
    } else {
      this.flag = false;
      console.log('Inputs Not Valid');
      console.log(this.validationForm);
    }
  }

  get nameValid() {
    return this.validationForm.controls['username'].valid;
  }
  get phoneValid() {
    return this.validationForm.controls['phone'].valid;
  }
  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }
  get confirmPasswordValid() {
    return this.validationForm.controls['confirm_password'].valid;
  }
}
