import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css'],
})
export class ProfileCardsComponent {
  public isCollapsed = false;

  // public favourites: boolean = false;
  tourCards = [
    

    {
      cardImg: '../../../../assets/Images/eachGovernate/alexandria-4.jpg',
      profileImg: '../../../../assets/Images/userProfile/guide-img-4.png',
      price: '$2,965',
    },
    {
      cardImg: '../../../../assets/Images/userProfile/pexels-alka-jha-6146575.jpg',
      profileImg: '../../../../assets/Images/userProfile/guideImg-2.png',
      price: '$2,965',
    },
    {
      cardImg: '../../../../assets/Images/userProfile/dahab-1.jpg',
      profileImg: '../../../../assets/Images/userProfile/guideImg-3.png',
      price: '$2,965',
    },
  ];

  // showFavourites(event: any) {
  //   this.favourites = !this.favourites;
  // }
}
