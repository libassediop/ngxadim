import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private myRoute: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedInn()) {
      return true;
    }else {
      this.myRoute.navigate(['auth/login']);
      return false;
    }
  }
}
