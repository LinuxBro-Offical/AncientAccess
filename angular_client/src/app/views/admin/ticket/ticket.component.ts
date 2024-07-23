import { Component, OnInit } from '@angular/core';
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnInit {

  constructor(private router:Router, private admin:AdminService) { }

  ngOnInit(): void {
    this.getAllheritages()
    this.getAllevents()
  
    this.admin.getTickets().subscribe(
      (response:any) => {
        this.ticketData = response.tickets
        console.log("Ticket Data", this.ticketData)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  ticketData = {}
  heritageData = []
  eventData = []

  getAllheritages(){
    this.admin.getHeritages().subscribe(
      (response:any) => {
        this.heritageData = response
      },
      (error) => {
        console.log(error)
      }
    );
  }

  getHeritage(id){
    return this.heritageData.find(obj => obj._id == id).title
  }

  getEvent(id){
    return this.eventData.find(obj => obj._id == id)
  }

  changeDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    return formattedDate
  }

  getAllevents(){
    this.admin.getEvents().subscribe(
      (response:any) => {
        this.eventData = response.events
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
