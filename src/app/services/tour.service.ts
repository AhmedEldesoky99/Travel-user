import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  constructor(private myHttp: HttpClient) {}
  private baseUrl = 'https://travel-8ztv.onrender.com/v1/tours';
  private baseUrl2 = 'https://travel-8ztv.onrender.com/v1/tours?all=true';

  //get tours
  getTours(baseUrl: any) {
    return this.myHttp.get(baseUrl);
  }



 // get tours limit 
  getToursLimit(limit: number) {
    return this.myHttp.get(`${this.baseUrl}?limit=${limit}`);
  }

  //get tour by id
  getTourById(id: any) {
    return this.myHttp.get(`${this.baseUrl}/${id}`);
  }

  //get cities
  getCities() {
    return this.myHttp.get(this.baseUrl2);
  }
}
