import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute,private admin:AdminService, private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
    });

    this.admin.singleUser(localStorage.getItem('User')).subscribe(
      (response:any) => {
        console.log(response)
        this.userData = response.user
      },
      (error) => {
        console.log(error)
      }
    );
  }
  id = ''
  userData = {}
}
