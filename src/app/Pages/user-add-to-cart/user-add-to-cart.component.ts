import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from 'src/app/services/User.service';
import { PaymentService } from 'src/app/services/payment.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrls: ['./user-add-to-cart.component.css'],
})
export class UserAddToCartComponent implements OnInit {
  // addedToCartTours$:Observable<any>=this.cartService.addedTours$;

  data = localStorage.getItem('cTours');
  addedToCartTours = this.data && JSON.parse(this.data);
  toursData: any;
  cartId: any;

  paymentDetails: any;
  // isLoading = true;
  constructor(
    private paymentService: PaymentService,
    private tourService: TourService,
    private router: Router,
    private userService: UserService
  ) {
    // console.log( this.addedToCartTours$);
  }
  addedtours: any = [];
  addtours: any;
  inCartTours: any;
  tour: any;
  ngOnInit() {
    this.userService.user$.subscribe({
      next: (value: any) => {
        console.log(value);

        console.log(value?.cart?.tours);
        this.inCartTours = value?.cart?.tours;
      },
    });

    // let inCartTours$: Observable<any> = new Observable((subscriber) => {
    //   console.log('Hello');
    //   console.log(this.inCartTours);
    // });

    // inCartTours$.pipe(
    //   map((tourID: any) => {
    //     console.log(tourID);

    //     this.tourService.getTourById(tourID).subscribe({
    //       next: (res: any) => {
    //         console.log(res);
    //         this.tours?.push(res);
    //         console.log(this.tours);
    //       },
    //       error: () => {},
    //     });
    //   })
    // ).subscribe({
    //   next:(res)=>{
    //     console.log(res);

    //   }
    // });

    this.inCartTours?.forEach((tourID: any) => {
      console.log(tourID);

      this.tourService.getTourById(tourID).subscribe({
        next: (res: any) => {
          console.log(res);
          this.addedtours?.push(res);
        },
        error: () => {},
      });
    });
  }

  checkout() {
    this.cartId = this.addedToCartTours._id;
    this.paymentService.pay(this.cartId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.paymentDetails = res.data;
        console.log(this.paymentDetails);
        console.log(this.addedToCartTours);
        // this.isLoading = false;
        window.open(this.paymentDetails.url, '_self');
      },
      error: (err) => {},
    });
  }
}
