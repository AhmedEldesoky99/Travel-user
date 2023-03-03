import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-card',
  templateUrl: './add-to-cart-card.component.html',
  styleUrls: ['./add-to-cart-card.component.css'],
})
export class AddToCartCardComponent implements OnInit {
  data = localStorage.getItem('cTours');
  // addedToCartTours = JSON.parse(this.data);
  addedToCartTours = this.data && JSON.parse(this.data);

  toursData = localStorage.getItem('tours');
  // addedToCartTours = this.data && JSON.parse(this.data);
  addtours = this.toursData && JSON.parse(this.toursData);

  adultsCountNum: any = Number(localStorage.getItem('adultsCountNum'));
  totalPerTour: any;

  @Input() addtour: any;

  ngOnInit() {}
  constructor() {
    console.log(this.addedToCartTours);

  }
}
