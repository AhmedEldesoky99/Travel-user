import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Tour } from 'src/app/models/tourModel';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/User.service';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-now-card',
  templateUrl: './book-now-card.component.html',
  styleUrls: ['./book-now-card.component.css'],
})
export class BookNowCardComponent implements OnInit {
  @Input() tourDetails: { person_cost: any } | any;

  tourID: string;
  subscriber_number: any = 1;
  addedToCartTours: any;
  data: any;
  isLoading = true;

  inCart: boolean = false;
  tour: Tour = {} as Tour;

  constructor(
    private inCartToursService: AddToCartService,
    private myActivated: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router,
    private apiService: ApiService,
    private userService: UserService
  ) {
    this.tourID = myActivated.snapshot.params['tourid'];
  }

  ngOnInit(): void {
    this.apiService
      .get<Tour>(`https://travel-8ztv.onrender.com/v1/tours/${this.tourID}`)
      .pipe(
        tap((tour: any) => {
          this.tour = tour.data?.tour;
        })
      )
      .subscribe();
    this.userService.user$
      .pipe(
        tap((user: any) => {
          this.inCart = !!user.cart?.tours?.find(
            (c: any) => c.id == this.tourID
          );
        })
      )
      .subscribe();
  }

  //-----------------------------todo: handle when tour already in cart
  toggleCart() {
    // add/remove from cart
    if (this.inCart) {
      console.log('remove');
      this.userService.removeFromCart(this.tourID as string).subscribe({
        next: (res) => {
          console.log(res);
          console.log(this.userService.user$);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: err.message,
          });
        },
      });
    } else {
      console.log('add');
      console.log(this.subscriber_number);
      this.inCart = true;
      this.userService
        .addToCart(this.tourID, this.subscriber_number)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: err.message,
            });
          },
        });
    }
  }

  // addTourToCart() {
  //   console.log(this.subscriber_number);

  //   this.inCartToursService
  //     .addToCart(this.tourID, this.subscriber_number)
  //     .subscribe({
  //       next: (res: any) => {
  //         console.log(this.subscriber_number);

  //         console.log(res);

  //         this.addedToCartTours = res.data;

  //         console.log(this.addedToCartTours);
  //         localStorage.setItem('cTours', JSON.stringify(this.addedToCartTours));
  //         console.log();

  //         localStorage.setItem('subscriber_number', this.subscriber_number);

  //         // this.isLoading = false;
  //         Swal.fire('Good job!', 'Tour added to cart sucessfully !', 'success');
  //       },
  //       error: (err) => {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Something went wrong!',
  //           footer: 'please refresh the website',
  //         });
  //       },
  //     });
  // }

  cartId: any;
  paymentDetails: any;

  //check out function
  checkout() {
    this.cartId = this.addedToCartTours._id;
    console.log(this.cartId);

    this.paymentService.pay(this.cartId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.paymentDetails = res.data;
        console.log(this.paymentDetails);
        this.isLoading = false;

        window.open(this.paymentDetails.url, '_self');
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
  }
}
