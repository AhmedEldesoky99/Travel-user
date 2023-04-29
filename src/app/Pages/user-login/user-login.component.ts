import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tour } from 'src/app/models/tourModel';
import { User } from 'src/app/models/UserModel';
import { UserService } from 'src/app/services/User.service';
import Swal from 'sweetalert2';
import { LoginService } from './../../services/auth/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  flag: boolean;

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {
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
    let userData: User;
    if (this.validationForm.valid) {
      this.flag = true;
      this.loginService.loginUser(this.validationForm.value).subscribe({
        next: (res: any) => {
          console.log(res); //user
          userData = res.data.userBody;
          localStorage.setItem('token', res.data.access_token);
          console.log(localStorage.getItem('token'));
          localStorage.setItem('userData', JSON.stringify(res.data.userBody));

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
    } else {
      this.flag = false;
      console.log('Invalid Inputs');
      console.log(this.validationForm);
    }
    console.log(localStorage.getItem('token'));
  }

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }

  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }
}
