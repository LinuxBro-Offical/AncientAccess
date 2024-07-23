import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private auth: AuthService,) {}

  ngOnInit(): void {}

  errors= ""

  onLogin(data){
    console.log("Data", data)
    this.auth.login(data).subscribe(
      (response:any) => {
        console.log("Response:", response)
        localStorage.setItem("Token", response.token)
        localStorage.setItem("User", response.user._id)
        if(response.user.type=="admin"){
        this.router.navigate(['/admin/dashboard'])
        }
        else{
          this.router.navigate(['/landing'])
        }
      },
      (error) => {
        console.error(error);
        this.errors= error.error.error.split(".")[0]
          setTimeout(() => {
            this.errors= ""
          }, 3000);
      }
    );
  }
}
