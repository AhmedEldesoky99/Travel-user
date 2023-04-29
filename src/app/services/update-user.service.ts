import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  constructor(private myHttp: HttpClient) {}
  private baseUrl = 'https://travel-8ztv.onrender.com/v1/user/profile';
  token = localStorage.getItem('token');

  // get user by id
  getUserById(userId: any) {
    return this.myHttp.get(`${this.baseUrl}/${userId}`);
  }

  // update user by id
  updateUser(user: any) {
    const head = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    console.log(this.token);

    return this.myHttp.patch(this.baseUrl, user, {
      headers: head,
    });
  }
}
