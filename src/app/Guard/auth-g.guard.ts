import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../services/auth/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGGuard implements CanActivate {
  constructor(private authService: LoginService, private route: Router) {}

  logInStatus = this.authService.checkLogin();

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuth || this.logInStatus) {
      return true;
    }
    this.route.navigate(['/logIn']);
    return false;
  }
}
