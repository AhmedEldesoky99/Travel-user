import { Component } from '@angular/core';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent {
  constructor(private userService: UserService) {
    console.log(this.userService.userSubject.getValue());
  }
}
