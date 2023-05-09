import { Component } from '@angular/core';
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
  constructor(private registrationService: AuthRegistrationService) { }

  onSubmit() {
    this.registrationService.registerUser(this.user)
      .subscribe(data=>{
       this. user=data;
      }
      );


  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
