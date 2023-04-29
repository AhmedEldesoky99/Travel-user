import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/auth/login.service';
import { UserService } from './services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  isAuth = false;
  logInStatus = this.authService.checkLogin();

  constructor(
    private userService: UserService,
    private authService: LoginService
  ) {
    const userData = localStorage.getItem('userData');
    const user = userData && JSON.parse(userData);

    console.log('////// app', user);

    if (this.isAuth || this.logInStatus) {
      console.log('///////////// i am here ', user);
      this.userService.init(user);
    }
  }

  ngOnInit(): void {
    // const userData = localStorage.getItem('userData');
    // const user = userData && JSON.parse(userData);
    // console.log('////// app', user);
    // if (this.isAuth || this.logInStatus) {
    //   console.log('i am here ');
    //   this.userService.init(user);
    //   console.log(user);
    // }
  }
}
