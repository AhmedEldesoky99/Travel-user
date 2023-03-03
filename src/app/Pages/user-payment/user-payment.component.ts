import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css'],
})
export class UserPaymentComponent {
  flag: boolean;

  constructor() {
    this.flag = true;
  }

  validationForm = new FormGroup({
    CardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    Expiration: new FormControl('', [
      Validators.required,
      Validators.pattern('[]*'),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(3),
    ]),
    // confirm_password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6),
    // ]),
  });

  get CardNumberValid() {
    return this.validationForm.controls['CardNumber'].valid;
  }
  get ExpirationValid() {
    return this.validationForm.controls['Expiration'].valid;
  }
  get cvvValid() {
    return this.validationForm.controls['cvv'].valid;
  }
  // get passwordValid() {
  //   return this.validationForm.controls['password'].valid;
  // }
  // get confirmPasswordValid() {
  //   return this.validationForm.controls['confirm_password'].valid;
  // }
}
