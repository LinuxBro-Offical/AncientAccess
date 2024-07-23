import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor(private router:Router, private admin:AdminService) {}

  ngOnInit() {
    this.getTodaysVisit()
    this.getTodaysEventVisit()
    this.getAllRevenue()
  }

  getTodaysVisit(){
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10); 
    this.admin.getVisitsDay(formattedDate).subscribe(
      (response:any) => {
        console.log(response)
        this.data = response
      },
      (error) => {
        console.log(error)
      }
    );
  }
  getTodaysEventVisit(){
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10); 
    this.admin.getEventVisitsDay(formattedDate).subscribe(
      (response:any) => {
        console.log(response)
        this.eventData = response
      },
      (error) => {
        console.log(error)
      }
    );
  }

  getAllRevenue(){
    this.admin.getAllrevenue().subscribe(
      (response:any) => {
        console.log(response)
        this.revenue = response
      },
      (error) => {
        console.log(error)
      }
    );
  }

  getRevenuePerDay(date){
    console.log(date)
    this.admin.revenuePerday(date).subscribe(
      (response:any) => {
        console.log(response)
        this.revenueToday = response
      },
      (error) => {
        console.log(error)
      }
    );
  }
  selectedDate: string;
  revenue = {}
  revenueToday = {}
  eventData = {}
  data = {}
}
