import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGGuard } from './Guard/auth-g.guard';

import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ErrorComponent } from './Pages/error/error.component';
import { JoinUsComponent } from './Pages/join-us/join-us/join-us.component';
import { PaymentFailedComponent } from './Pages/payment-failed/payment-failed.component';
import { PaymentSucessComponent } from './Pages/payment-sucess/payment-sucess.component';
import { TourDetailsComponent } from './Pages/tour-details/tour-details.component';
import { UserAddToCartComponent } from './Pages/user-add-to-cart/user-add-to-cart.component';
import { UserGovernorateComponent } from './Pages/user-governorate/user-governorate.component';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { UserLoginComponent } from './Pages/user-login/user-login.component';
import { UserPaymentComponent } from './Pages/user-payment/user-payment.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { UserSignUpComponent } from './Pages/user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'joinUs', component: JoinUsComponent },
  { path: 'signUp', component: UserSignUpComponent },
  { path: 'logIn', component: UserLoginComponent },

  { path: 'eachGov/:cityName', component: UserGovernorateComponent },
  // { path: 'eachGov/tourDetails/:tourid', component: TourDetailsComponent },

  { path: 'tourDetails/:tourid', component: TourDetailsComponent },
  {
    path: 'addToCart',
    component: UserAddToCartComponent,
    canActivate: [AuthGGuard],
  },
  {
    path: 'payment',
    component: UserPaymentComponent,
    canActivate: [AuthGGuard],
  },
  { path: 'aboutUs', component: AboutUsComponent },
  {
    path: 'userprofile',
    component: UserProfileComponent,
    canActivate: [AuthGGuard],
  },

  {
    path: 'payment-sucess',
    component: PaymentSucessComponent,
    canActivate: [AuthGGuard],
  },
  {
    path: 'payment-failed',
    component: PaymentFailedComponent,
    canActivate: [AuthGGuard],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
