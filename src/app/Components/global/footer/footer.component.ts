import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 constructor(@Inject(DOCUMENT) private document: Document){

 }
  scrollToTop(): void {
    // scroll to the top of the body
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
