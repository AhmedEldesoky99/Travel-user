import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-details-slider',
  templateUrl: './tour-details-slider.component.html',
  styleUrls: ['./tour-details-slider.component.css'],
})
export class TourDetailsSliderComponent {
  @Input() tourDetails: { title: string } | any;
  // @Input() photos: any;
}
