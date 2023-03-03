import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headerGov',
  templateUrl: './headerGov.component.html',
  styleUrls: ['./headerGov.component.css'],
})
export class HeaderGovComponent {
  cityName: any;

  constructor(private myActivated: ActivatedRoute) {
    this.cityName = myActivated.snapshot.params['cityName'];
    console.log(this.cityName);
  }
}
