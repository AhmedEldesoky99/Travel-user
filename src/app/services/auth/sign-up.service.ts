import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private myHttp: HttpClient) { };

  private baseUrl = 'https://travel-8ztv.onrender.com/v1/users/sign-up/user';

  //add user
  addUser(user: any) {
    return this.myHttp.post(this.baseUrl, user); //return observable object
  };

};

