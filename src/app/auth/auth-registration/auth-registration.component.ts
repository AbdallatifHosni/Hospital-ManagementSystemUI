import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRegister } from 'src/app/Models/auth-register';
import { AuthRegistrationService } from 'src/app/Services/auth-registration.service';
@Component({
  selector: 'app-auth-registration',
  templateUrl: './auth-registration.component.html',
  styleUrls: ['./auth-registration.component.css']
})
export class AuthRegistrationComponent {
  user:AuthRegister=new AuthRegister();
  showPassword = false;
  constructor(private registrationService: AuthRegistrationService,private route :Router) { }

  onSubmit() {
    this.registrationService.registerUser(this.user)
      .subscribe(data=>{
       this. user=data;
       this.route.navigateByUrl(`/Home`);
      }
      );


  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
