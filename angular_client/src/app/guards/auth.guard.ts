import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    if (this.auth.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['auth/login'])
    }
    // const token = localStorage.getItem('token');

    // if (token) {
    //   // Token exists in local storage, user is authenticated
    //   return true;
    // }

    // // Token doesn't exist, redirect to login page
    // return this.router.createUrlTree(['auth/login']);
  }
  
}
