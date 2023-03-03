import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-user-governorate',
  templateUrl: './user-governorate.component.html',
  styleUrls: ['./user-governorate.component.css'],
})
export class UserGovernorateComponent implements OnInit {
  // ---------
  tourCards: [] | any;
  cityName: any;

  isLoading = true;

  constructor(
    public tourService: TourService,
    public router: Router,
    private myActivated: ActivatedRoute
  ) {
    this.cityName = myActivated.snapshot.params['cityName'];
    console.log(this.cityName);
  }

  //calling API
  ngOnInit(): void {
    //--------- get Tours ---------
    this.tourService
      .getTours(
        `https://travel-8ztv.onrender.com/v1/tours?location=${this.cityName}`
      )
      .subscribe({
        next: (res) => {
          this.tourCards = res;
          this.isLoading = false;

          console.log(res);
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
