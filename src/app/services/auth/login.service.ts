import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private myHttp: HttpClient,private route: Router) {}
  
  isAuth = false;
  private baseUrl = 'https://travel-8ztv.onrender.com/v1/users/sign-in/user';

  //login user
  loginUser(user: any) {
    this.isAuth = true;
    return this.myHttp.post(this.baseUrl, user); //return observable object
  }

  //logout user
  logout() {
    this.isAuth = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    //name -image - email
    this.route.navigate(['']);
  }

  checkLogin() {
    return localStorage.getItem('token');
  }
}
