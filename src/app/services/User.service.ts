import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { Cart, Tour } from '../models/tourModel';
import { User } from '../models/UserModel';
import { ApiService } from './api.service';

const baseUrl = 'https://travel-8ztv.onrender.com/v1';
const token = localStorage.getItem('token');

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //BehaviorSubject to know the last value

  constructor(private myHttp: HttpClient, private apiService: ApiService) {
    // console.log( this.user$);
  }

  Data: User | undefined;
  // cart:{} ={}
  cartData: any = {};
  init(Data: any) {
    console.log(Data);

    this.apiService.get(`https://travel-8ztv.onrender.com/v1/cart`).subscribe({
      next: (res: any) => {
        console.log('res', res.data);
        this.cartData = { ...Data, cart: res?.data };

        this.cartData = { ...Data, cart: res?.data };
        this.userSubject.next(this.cartData);
        localStorage.setItem('userData', JSON.stringify(this.cartData));
      },
    });
    //////////////////////////////// first
    // console.log('///////////////////// init ', this.cartData, Data);
  }

  userData = localStorage.getItem('userData');
  user = this.userData && JSON.parse(this.userData);

  ////////////////////////////////////////////
  userSubject = new BehaviorSubject<any>(this.user);

  // send observable :
  //1-to prevent mutation
  //2-watch data when change

  user$ = this.userSubject.asObservable();

  addToCart(id: string, subscriber_number: {}) {
    console.log('here');
    console.log(subscriber_number);
    //1-update backend
    return this.apiService
      .post(`https://travel-8ztv.onrender.com/v1/cart/${id}`, subscriber_number)
      .pipe(
        tap((res: any) => {
          console.log('here in');
          console.log('////// response', res);

          this.user$.pipe(
            tap((res: any) => {
              // 2- update (cart subject)
              this.userSubject.next({
                ...this.userSubject.getValue(),
                cart: res?.data,
              });
              console.log('userSubject', this.userSubject.getValue());
            })
          );
        })
      );
  }

  removeFromCart(id: string) {
    //1-update backend
    return this.apiService
      .delete<Cart[]>(`https://travel-8ztv.onrender.com/v1/cart/${id}`)
      .pipe(
        tap(() => {
          let remainingTours = this.userSubject
            .getValue()
            .cart.tours.filter((tourId: any) => {
              tourId !== id;
            });
          this.userSubject.next(remainingTours);
        })
      );
  }
}

//  // 2- update (cart subject)
//  this.cartSubject.next([
//   ...this.cartSubject.getValue().filter((c) => c.id !== id),
// ]);
