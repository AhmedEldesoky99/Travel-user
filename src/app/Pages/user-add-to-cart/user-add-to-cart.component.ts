import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrls: ['./user-add-to-cart.component.css'],
})
export class UserAddToCartComponent implements OnInit {
  data = localStorage.getItem('cTours');
  addedToCartTours = this.data && JSON.parse(this.data);
  toursData: any;
  cartId: any;

  paymentDetails: any;
  // isLoading = true;
  constructor(
    private paymentService: PaymentService,
    private tourService: TourService,
    private router: Router
  ) {}
  tours: any = [];
  addtours: any;
  cartItems: any = localStorage.getItem('cartItems');
  ngOnInit() {
    this.addedToCartTours?.tours?.forEach((tourID: any) => {
      this.tourService.getTourById(tourID).subscribe({
        next: (res: any) => {
          console.log(res);
          this.tours?.push(res);
          localStorage.setItem('tours', JSON.stringify(this.tours));
          console.log(this.tours);
          this.cartItems = +1;
        },
        error: () => {},
      });
    });
    console.log(this.tours);
    console.log('hamada');

    this.toursData = localStorage.getItem('tours');
    // addedToCartTours = this.data && JSON.parse(this.data);
    this.addtours = this.toursData && JSON.parse(this.toursData);
    console.log(this.addtours);
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

  // reviewCards = [
  //   { booking_fee: '0.000', subTotal: '7,172.96', total: '7,172.96' },
  // ];
}
