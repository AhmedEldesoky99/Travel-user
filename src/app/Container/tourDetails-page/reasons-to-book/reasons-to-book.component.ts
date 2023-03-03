import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reasons-to-book',
  templateUrl: './reasons-to-book.component.html',
  styleUrls: ['./reasons-to-book.component.css'],
})
export class ReasonsToBookComponent {
  @Input() resons:any;

}
