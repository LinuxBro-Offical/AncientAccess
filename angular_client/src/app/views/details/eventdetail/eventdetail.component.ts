import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private admin:AdminService, private router:Router) { }

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

    this.admin.singleEvent(this.id).subscribe(
      (response:any) => {
        console.log(response.event)
        this.eventData = response.event
      },
      (error) => {
        console.log(error)
      }
    );
    this.getAllheritages()
  }

  id = ''
  eventData = {}
  userData = {}
  heritageData = []
  showModal = false;
  warning = ""
  message = ""

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

  toggleModal(){
    console.log(this.showModal)
    this.showModal = !this.showModal;
  }

  getHeritage(id){
    return this.heritageData.find(obj => obj._id == id).title
  }

  changeDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    return formattedDate
  }

  onPay(data){
    console.log(data)
    if(data.customerPointsDeducted > this.userData["customerPoints"]){
      this.warning = `Maximum ${this.userData["customerPoints"]} points available.`
      setTimeout(() => {
        this.warning= ""
      }, 3000);
    }
    data.user = this.userData['_id']
    data.culturalAttraction = this.eventData["place"]
    data.isEvent = true
    data.selectedEvent = this.eventData['_id']
    data.totalAmount = this.eventData['ticketPrice']
    if(data.customerPointsDeducted ==''){
      data.customerPointsDeducted=0
    }
    data.finalAmount = data.totalAmount-data.customerPointsDeducted
    data.currency = "usd"
    console.log(data)
    this.admin.payment(data).subscribe(
      (response:any) => {
        console.log(response)
        this.showModal = !this.showModal;
        this.message= "Ticket Conformed."
        setTimeout(() => {
          this.message= ""
        }, 6000);
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
