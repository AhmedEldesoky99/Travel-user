import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // ---------
  cities: any;
  public cityValue: any;
  isdisabled = true;

  constructor(myActivated: ActivatedRoute, private tourService: TourService) {}

  //calling API
  ngOnInit(): void {
    //--------- get Cities ---------
    this.tourService.getCities().subscribe({
      next: (res: any) => {
        this.cities = res.data;
        console.log(this.cities);
      },
    });
  }

  //---------  search comboBox ---------
  public cityCode(e: any): void {
    let selectedCity = this.cities.find(
      (x: { name: any }) => x === e.target.value
    );

    //--------- disable search ---------
    if (this.cities.includes(this.cityValue)) {
      this.isdisabled = false;
    }
  }
}
