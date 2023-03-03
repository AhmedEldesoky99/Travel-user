import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  // ---------
  ID = 0;
  baseUrl: any;
  destinations: { src: String; caption: String }[] | any;
  tourCards: [] | any;
  cities: [] | any;
  cards = [
    { src: '../../../assets/Images/home/Cairo-5.jpg', caption: '' },
    { src: '../../../assets/Images/home/alexandria-3.jpg', caption: '' },
    { src: '../../../assets/Images/home/Fayoum.jpeg', caption: '' },
    { src: '../../../assets/Images/home/Fayoum.jpeg', caption: '' },
  ];

  isLoading = true;

  constructor(myActivated: ActivatedRoute, private tourService: TourService) {
    this.ID = myActivated.snapshot.params['tourid'];
    // console.log(this.ID);
  }

  //calling API
  ngOnInit(): void {
    //--------- get Cities ---------
    this.tourService.getCities().subscribe({
      next: (res: any) => {
        this.cities = res.data;
        console.log(this.cities);
        this.destinations = this.cards.map((card, i) => {
          return { ...card, caption: this.cities[i] };
        });
        console.log(this.destinations);
        this.baseUrl = `https://travel-8ztv.onrender.com/v1/tours?location=${this.destinations.caption}`;

        this.isLoading = false;
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

    //--------- get Tours ---------
    this.tourService.getTours(this.baseUrl).subscribe({
      next: (res) => {
        console.log(res);
        this.tourCards = res;
        this.isLoading = false;
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
