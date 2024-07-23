import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
})
export class MapsComponent implements OnInit {
  constructor(private router:Router, private admin:AdminService,) {}

  ngOnInit(): void {
    this.admin.getAllUsers().subscribe(
      (response:any) => {
        console.log(response)
        this.userData = response
      },
      (error) => {
        console.log(error)
      }
    );
  }
  showModal = false;
  userData ={}
  modalUser ={}

  toggleModal(user: object){
    this.modalUser=user
    this.showModal = !this.showModal;
  }

  onUpdate(user, data){
    const keys =Object.keys(data).filter(key => data[key] !== '')
    for(const item in user){
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == item){
          user[item] = data[key]
        }
      }
    }
    this.admin.updateUser(user._id, user).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getAllUsers().subscribe(
          (response:any) => {
            this.userData = response
            this.showModal = !this.showModal;
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
  }


  // Delete User 
  deleteUser(id: number){
    this.admin.removeUser(id).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getAllUsers().subscribe(
          (response:any) => {
            this.userData = response
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
