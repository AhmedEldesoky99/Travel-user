import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logInStatus = this.authService.checkLogin();
  addedTours = localStorage.getItem('ctour');
  cartItems: any = 0;

  constructor(public authService: LoginService) {
    console.log(localStorage.getItem('ctour'));
    localStorage.setItem('cartItems', this.cartItems);
  }
  //img=localStorage.getItem("id")
  // tour:any;

  // toursNumber=this.addedTours?.tours?.length;

  ngOnInit(): void {}
  logOut() {
    this.authService.logout();
    window.location.reload();
  }
}
