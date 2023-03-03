import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-food-slider',
  templateUrl: './food-slider.component.html',
  styleUrls: ['./food-slider.component.css'],
})
export class FoodSliderComponent {
  @Input() foodPhotos: { public_id: any; url: any } | any;
}
