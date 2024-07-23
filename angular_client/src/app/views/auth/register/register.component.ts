import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSignup(data){
    if(this.isChecked){
      console.log("Data", data)
      this.auth.signup(data).subscribe(
        (response:any) => {
          console.log(response)
          this.router.navigate(['/auth/login'])
          return response
        },
        (error) => {
          this.errors= error.error.error.split(".")[0];
          setTimeout(() => {
            this.errors= ""
          }, 3000);
           
        }
      );
    }
    else{
      this.warning = "Please accept the terms and conditions"
    }
  }
  isChecked = false;
  warning = ""
  errors = ""

  updateButtonState() {
    this.isChecked = !this.isChecked
    this.warning = ""
  }
}
