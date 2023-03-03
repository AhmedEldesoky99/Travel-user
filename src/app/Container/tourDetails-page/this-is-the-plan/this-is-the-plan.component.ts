import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-this-is-the-plan',
  templateUrl: './this-is-the-plan.component.html',
  styleUrls: ['./this-is-the-plan.component.css'],
})
export class ThisIsThePlanComponent {
  @Input() plan:
    | {
        meeting_point: string;
        city_highlights: string;
        hidden_gems: string;
        magical_storytelling: string;
        special_treat: string;
      }
    | any;
}
