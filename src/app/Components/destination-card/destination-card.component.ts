import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css'],
})
export class DestinationCardComponent {
  @Input() destination: { src: String; caption: String } | any;
  
}
