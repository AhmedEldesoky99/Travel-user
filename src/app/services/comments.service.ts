import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private myHttp: HttpClient) {}

  private baseUrl = 'https://travel-8ztv.onrender.com/v1/comments';

  token = localStorage.getItem('token');

  //get all comments
  getComments(tourId: any) {
    return this.myHttp.get(`${this.baseUrl}/tour/${tourId}`);
  }

  //create comment
  createComment(tourId: any, comment: any) {
    const head = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

    return this.myHttp.post(`${this.baseUrl}/${tourId}`, comment, {
      headers: head,
    });
  }

  //delete Comment By Id
  deleteCommentById(commentId: any) {
    const head = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.myHttp.delete(`${this.baseUrl}/${commentId}`, {
      headers: head,
    });
  }

  

  //get Comment By Id
  getCommentById(tourId: any, userId: any) {
    return this.myHttp.get(`${this.baseUrl}/${tourId}/${userId}`);
  }

  //update Comment By Id
  updateCommentById(tourId: any, userId: any, comment: any) {
    return this.myHttp.put(`${this.baseUrl}/${tourId}/${userId}`, comment);
  }
}
