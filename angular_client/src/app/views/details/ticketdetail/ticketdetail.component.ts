import { Component, OnInit } from '@angular/core';
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css']
})
export class TicketdetailComponent implements OnInit {

  constructor(private admin:AdminService, private router:Router) { }

  ngOnInit(): void {

    this.admin.ticketByUser(localStorage.getItem('User')).subscribe(
      (response:any) => {
        console.log(response)
        this.tickets = response
      },
      (error) => {
        console.log(error)
      }
    );

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

  tickets = []
  userData = {}
  heritageData = []

  getHeritage(id){
    return this.heritageData.find(obj => obj._id == id).title
  }

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

  changeDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    return formattedDate
  }
}
