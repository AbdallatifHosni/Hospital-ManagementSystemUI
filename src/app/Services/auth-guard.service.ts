import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
 constructor(private authService: AuthService, private router: Router) { }
 canActivateChild(): boolean {
 if (this.authService.isAuthenticated()) {
 return true;
 } else {
 this.router.navigate(['/login']);
 return false;
 }
 }
}