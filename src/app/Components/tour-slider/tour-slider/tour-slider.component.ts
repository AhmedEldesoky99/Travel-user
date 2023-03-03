import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tour-slider',
  templateUrl: './tour-slider.component.html',
  styleUrls: ['./tour-slider.component.css'],
})
export class TourSliderComponent {
  @Input() tourDetails: any;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
// @Input() photos: { public_id: any; url: any } | any;
