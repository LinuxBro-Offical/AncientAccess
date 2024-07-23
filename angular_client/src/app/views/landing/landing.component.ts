import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  constructor(private router:Router, private admin:AdminService,) {}

  ngOnInit(): void {
    // heritages 
    this.admin.getHeritages().subscribe(
      (response:any) => {
        console.log(response)
        this.heritageData = response
      },
      (error) => {
        console.log(error)
      }
    );
    
    // events 
    this.admin.getEvents().subscribe(
      (response:any) => {
        this.eventData = response.events
        console.log("event Data", this.eventData)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  getHeritage(id){
    return this.heritageData.find(obj => obj._id == id)
  }

  changeDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    return formattedDate
  }


  heritageData = []
  eventData = {}
}
