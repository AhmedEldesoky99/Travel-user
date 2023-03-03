import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor(private myHttp: HttpClient) {}
  private baseUrl = 'https://travel-8ztv.onrender.com/v1/cart';
  token = localStorage.getItem('token');

  //add to cart
  addToCart(tourId: any, subscriber_number: any) {
    const head = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    console.log(subscriber_number);

    return this.myHttp.post(
      `${this.baseUrl}/${tourId}`,
      { subscriber_number },
      {
        headers: head,
      }
    );
  }
}
