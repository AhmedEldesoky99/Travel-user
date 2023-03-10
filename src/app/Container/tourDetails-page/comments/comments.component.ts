import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { LoginService } from 'src/app/services/auth/login.service';
import { CommentsService } from 'src/app/services/comments.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: { content: string } | any;

  // ---------
  ID: any;
  commentValue: any;
  comment: { content: any; rating: any; title: any } | any;
  newComment: [] | any;

  logInStatus = this.authService.checkLogin();
  userId = localStorage.getItem('id');
  profilePhoto = localStorage.getItem('profilePhoto');

  constructor(
    myActivated: ActivatedRoute,
    private tourService: TourService,
    private commmentService: CommentsService,
    public authService: LoginService
  ) {
    this.ID = myActivated.snapshot.params['tourid'];
    console.log(this.ID);
  }

  ngOnInit(): void {
    console.log(this.profilePhoto);
  }

  //--------- add Comment ---------
  addComment() {
    this.comment = {
      title: 'hamada',
      content: this.commentValue,
      rating: 5,
    };
    // console.log(this.commentValue);
    console.log(this.comment);

    this.commmentService.createComment(this.ID, this.comment).subscribe({
      next: (res: any) => {
        this.newComment = res.data;
        console.log(this.newComment.user);
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

  //--------- delete Comment ---------
  deleteComment(commentID: any) {
    console.log(commentID);

    this.commmentService.deleteCommentById(commentID).subscribe({
      next: (res: any) => {
        this.comments.splice(this.comments.indexOf(res.data), 1);
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
