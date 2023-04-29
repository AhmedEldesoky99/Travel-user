import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://travel-8ztv.onrender.com/v1';

  // token = localStorage.getItem('token');
  //-----------------todo: token undefined 
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTU2MDU0Mzk3YjkzMTEzMDY2OGNlNSIsImlhdCI6MTY3OTEyMjUyM30.xVHgpsS1GUh5RdhR_79qgaJEibCpQ337iH2YlQjvHo8';

  private header = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + this.token
  );

  constructor(private httpClient: HttpClient) {}

  // get
  get<T>(baseUrl: string) {
    console.log(baseUrl);

    return this.httpClient.get<T>(baseUrl, { headers: this.header });
  }

  //post
  post<IRequsetBody>(baseUrl: string, subscriber_number: IRequsetBody) {
    console.log(this.token);
    return this.httpClient.post(
      baseUrl,
      { subscriber_number },
      {
        headers: this.header,
      }
    );
  }

  //delete
  delete<T>(baseUrl: string) {
    return this.httpClient.delete<T>(baseUrl, { headers: this.header });
  }

  //setCredentials(){this.headers=new HttpHeaders('Authorization', 'Bearer ' + this.token)}
  //removeCredentials(){this.headers.delete('Authorization', 'Bearer ' + this.token)}
}
