import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

// --------- global ---------
import { TourCardComponent } from './Components/global/tour-card/tour-card.component';
import { NavbarComponent } from './Components/global/navbar/navbar.component';
import { FooterComponent } from './Components/global/footer/footer.component';

// --------- Join Us page---------
import { JoinUsComponent } from './Pages/join-us/join-us/join-us.component';

// --------- Sign Up page---------
import { UserSignUpComponent } from './Pages/user-sign-up/user-sign-up.component';

// --------- Log in page---------
import { UserLoginComponent } from './Pages/user-login/user-login.component';

// --------- error page ---------
import { ErrorComponent } from './Pages/error/error.component';

// --------- Home page---------

import { UserHomeComponent } from './Pages/user-home/user-home.component';

import { HeaderComponent } from './Container/home-page/header/header.component';
import { DestinationComponent } from './Container/home-page/destination/destination.component';
import { ImpactComponent } from './Container/home-page/impact/impact.component';
import { PopularDestComponent } from './Container/home-page/popular-dest/popular-dest.component';
import { ExploreComponent } from './Container/home-page/explore/explore.component';
import { QuoteComponent } from './Container/home-page/quote/quote.component';

import { DestinationCardComponent } from './Components/destination-card/destination-card.component';

// --------- tour details page ---------
import { TourDetailsComponent } from './Pages/tour-details/tour-details.component';

import { FoodSliderComponent } from './Container/tourDetails-page/food-slider/food-slider.component';
import { DetailsCardComponent } from './Container/tourDetails-page/details-card/details-card.component';
import { ReasonsToBookComponent } from './Container/tourDetails-page/reasons-to-book/reasons-to-book.component';
import { TourDetailsSliderComponent } from './Container/tourDetails-page/tour-details-slider/tour-details-slider.component';
import { ThisIsThePlanComponent } from './Container/tourDetails-page/this-is-the-plan/this-is-the-plan.component';
import { WhereToMeetComponent } from './Container/tourDetails-page/where-to-meet/where-to-meet.component';
import { TravelerTipsComponent } from './Container/tourDetails-page/traveler-tips/traveler-tips.component';
import { CommentsComponent } from './Container/tourDetails-page/comments/comments.component';

import { TourSliderComponent } from './Components/tour-slider/tour-slider/tour-slider.component';
import { BookNowCardComponent } from './Components/book-now-card/book-now-card.component';

// --------- about us page ---------
import { AboutUsComponent } from './Pages/about-us/about-us.component';

import { WhyBookComponent } from './Container/aboutUs-page/why-book/why-book.component';
import { VisionComponent } from './Container/aboutUs-page/vision/vision.component';
import { StatisticsComponent } from './Container/aboutUs-page/statistics/statistics.component';
import { OurStoryComponent } from './Container/aboutUs-page/our-story/our-story.component';

// ---------  User Governorate page ---------
import { UserGovernorateComponent } from './Pages/user-governorate/user-governorate.component';

import { HeaderGovComponent } from './Container/user-governorate/header/headerGov.component';

// ---------  UserAdd To Cart page ---------
import { UserAddToCartComponent } from './Pages/user-add-to-cart/user-add-to-cart.component';

import { AddToCartCardComponent } from './Components/add-to-cart-card/add-to-cart-card.component';

// ---------  User Payment page ---------
import { UserPaymentComponent } from './Pages/user-payment/user-payment.component';
import { PaymentSucessComponent } from './Pages/payment-sucess/payment-sucess.component';
import { PaymentFailedComponent } from './Pages/payment-failed/payment-failed.component';

// ---------  User Profil page ---------
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { ProfileCardsComponent } from './Container/userProfile-page/profile-cards/profile-cards.component';
import { ProfileHeaderComponent } from './Container/userProfile-page/profile-header/profile-header.component';
import { UserProfileTableComponent } from './Container/userProfile-page/user-profile-table/user-profile-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    NavbarComponent,
    FooterComponent,
    UserHomeComponent,
    UserLoginComponent,
    TourDetailsComponent,
    TourCardComponent,
    HeaderComponent,
    DestinationComponent,
    ImpactComponent,
    PopularDestComponent,
    DestinationCardComponent,
    TourSliderComponent,
    JoinUsComponent,
    BookNowCardComponent,
    DetailsCardComponent,
    ReasonsToBookComponent,
    TourDetailsSliderComponent,
    FoodSliderComponent,
    ThisIsThePlanComponent,
    WhereToMeetComponent,
    TravelerTipsComponent,

    ExploreComponent,
    QuoteComponent,

    AboutUsComponent,
    WhyBookComponent,
    VisionComponent,
    StatisticsComponent,
    OurStoryComponent,

    UserGovernorateComponent,
    HeaderGovComponent,

    UserAddToCartComponent,
    AddToCartCardComponent,

    UserPaymentComponent,

    PaymentSucessComponent,
    PaymentFailedComponent,
    ErrorComponent,
    CommentsComponent,
    UserProfileTableComponent,
    ProfileHeaderComponent,
    ProfileCardsComponent,
    UserProfileComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
})
export class AppModule {}
