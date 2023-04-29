import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { CommentsService } from 'src/app/services/comments.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css'],
})
export class TourDetailsComponent implements OnInit {
  @Input() addedToCartTours: {  } | any
  // ---------
  ID: any;
  tourDetails: any;
  resons: any;
  photos: any;
  foodPhotos: any;
  plan: any;
  comments: any;

  isLoading = true;

  constructor(
    myActivated: ActivatedRoute,
    private tourService: TourService,
    private commmentService: CommentsService
  ) {
    this.ID = myActivated.snapshot.params['tourid'];
    console.log(this.ID);
  }

  //calling API
  ngOnInit(): void {
    //--------- get Tour By Id ---------
    this.tourService.getTourById(this.ID).subscribe({
      next: (res: any) => {
        this.tourDetails = res.data.tour;
console.log(this.tourDetails);

        this.photos = this.tourDetails.photos;
        this.foodPhotos = this.tourDetails.expected_photos;
        this.resons = this.tourDetails.reasons;
        this.plan = this.tourDetails.plan;
        this.isLoading = false;
        console.log(this.tourDetails);
        // console.log(this.tourDetails.plan);
      },
      error(err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'please refresh the website',
        });
      },
    });

    //--------- get Comments ---------
    this.commmentService.getComments(this.ID).subscribe({
      next: (res: any) => {
        console.log(res);
        this.comments = res.data;
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
