import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { UserService } from 'src/app/services/User.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-to-cart-card',
  templateUrl: './add-to-cart-card.component.html',
  styleUrls: ['./add-to-cart-card.component.css'],
})
export class AddToCartCardComponent implements OnInit {
  // data = localStorage.getItem('cTours');
  // // addedToCartTours = JSON.parse(this.data);
  // addedToCartTours = this.data && JSON.parse(this.data);

  toursData = localStorage.getItem('tours');
  // addedToCartTours = this.data && JSON.parse(this.data);
  addtours = this.toursData && JSON.parse(this.toursData);

  adultsCountNum: any = Number(localStorage.getItem('adultsCountNum'));
  totalPerTour: any;

  @Input() addtour: any;
  deleteTour: any;

  constructor(
    private inCartToursService: AddToCartService,
    private userService: UserService
  ) {
    // console.log(this. addedToCartTours$);
  }

  ngOnInit() {}

  deleteTourFromCart(id: string) {
    this.userService.removeFromCart(id).subscribe(
      {
        next:(res)=>{
          console.log("///////////////",res);
          
        }
      }
    );

  }

  // deleteTourFromCart(id: number) {
  //   console.log(id);

  //   this.inCartToursService.deleteFromCart(id).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.deleteTour = res.data;
  //       this.addtours = this.addtours.splice(
  //         this.addtours.indexOf(this.deleteTour),
  //         1
  //       );
  //       console.log(this.addtours);
  //       // localStorage.setItem('cTours', this.addtours);
  //     },
  //     error: (err) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Something went wrong!',
  //         footer: 'please refresh the website',
  //       });
  //     },
  //   });
  // }
}
