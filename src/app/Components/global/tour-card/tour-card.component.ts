import { Component, Input, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css'],
})
export class TourCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() tourCard:
    | { cardImg: String; profileImg: String; price: String }
    | any;
}
