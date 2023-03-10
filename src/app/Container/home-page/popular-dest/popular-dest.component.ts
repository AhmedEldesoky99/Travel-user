import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-popular-dest',
  templateUrl: './popular-dest.component.html',
  styleUrls: ['./popular-dest.component.css'],
})
export class PopularDestComponent implements OnInit {
  // ---------
 
  isLoading = true;
  tourCards: [] | any;

  constructor(public tourService: TourService, public router: Router) {}

  //calling API
  ngOnInit(): void {
    //--------- get Tours ---------
    this.tourService.getToursLimit(6).subscribe({
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
