import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { LoginService } from 'src/app/services/auth/login.service';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logInStatus = this.authService.checkLogin();
  InCartCount: number = 0;
  cartItems: any;
  user: any;
  userProfilePhoto: string | undefined;
  constructor(
    public authService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.userService.userSubject.subscribe({
    //   next: (res) => console.log('userSubject', res),
    // });

    // console.log('////////   ', this.userService);

    this.userService.user$
      .pipe(
        tap((user) => {
          console.log('//////// userSubject tab', user);
          const cartItems = user?.cart?.tours;
          this.InCartCount = cartItems.length;
        })
      )
      .subscribe({
        next: (res) => console.log('////////// userSubject subscribe', res),
      });
  }
  logOut() {
    this.authService.logout();
    window.location.reload();
  }
}
