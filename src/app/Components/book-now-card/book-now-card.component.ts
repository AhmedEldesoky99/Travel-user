import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-now-card',
  templateUrl: './book-now-card.component.html',
  styleUrls: ['./book-now-card.component.css'],
})
export class BookNowCardComponent implements OnInit {
  @Input() tourDetails: { person_cost: any } | any;

  ID = 0;
  adultsCountNum :any = 1;
  addedToCartTours: any;
  data: any;
  isLoading = true;

  constructor(
    private cartService: AddToCartService,
    private myActivated: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.ID = myActivated.snapshot.params['tourid'];
  }
  ngOnInit(): void {}


  addTourToCart() {
    console.log(this.adultsCountNum);

    this.cartService.addToCart(this.ID, this.adultsCountNum).subscribe({
      next: (res: any) => {
        console.log(this.adultsCountNum);

        console.log(res);

        this.addedToCartTours = res.data;
        console.log(this.addedToCartTours);
        localStorage.setItem('cTours', JSON.stringify(this.addedToCartTours));
        console.log();

        localStorage.setItem('adultsCountNum',this.adultsCountNum)

        // this.isLoading = false;
        Swal.fire('Good job!', 'Tour added to cart sucessfully !', 'success');
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
