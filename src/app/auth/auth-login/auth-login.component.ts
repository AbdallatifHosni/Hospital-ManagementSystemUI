import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLogIn } from 'src/app/Models/auth-log-in';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {
  user:AuthLogIn=new AuthLogIn();
  showPassword = false;
  constructor( private auth:AuthService,private route:Router){}
  onSubmit() {
    return this.auth.login(this.user).subscribe(data=>{
      this.user=data;
      this.route.navigateByUrl(`/Home`);
    })
  

    
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }



}
