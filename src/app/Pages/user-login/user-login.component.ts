import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from './../../services/auth/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  flag: boolean;

  constructor(private loginService: LoginService) {
    this.flag = true;
  }

  ngOnInit(): void {}

  validationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  login() {
    if (this.validationForm.valid) {
      this.flag = true;
      this.loginService.loginUser(this.validationForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          //image - name - email
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('id', res.data.userBody._id);
          localStorage.setItem('profileName', res.data.userBody.username);
          localStorage.setItem('profilePhoto', res.data.userBody.photo);
          localStorage.setItem('email', res.data.userBody.email);
          localStorage.setItem('phone', res.data.userBody.phone);

          Swal.fire('Good job!', 'You are logged in !', 'success');
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
      console.log(this.validationForm);
    } else {
      this.flag = false;
      console.log('Invalid Inputs');
      console.log(this.validationForm);
    }
  }

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }

  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }
}
