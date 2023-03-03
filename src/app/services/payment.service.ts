import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private myHttp: HttpClient) {}
  private baseUrl = 'https://travel-8ztv.onrender.com/v1/checkout-session';
  token = localStorage.getItem('token');

  //add to cart
  pay(cartId: any) {
    const head = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

    return this.myHttp.get(`${this.baseUrl}/${cartId}`, {
      headers: head,
    });
  }
}
