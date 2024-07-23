import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-heritagedetail',
  templateUrl: './heritagedetail.component.html',
  styleUrls: ['./heritagedetail.component.css']
})
export class HeritagedetailComponent implements OnInit {

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

    this.admin.getSingleHeritage(this.id).subscribe(
      (response:any) => {
        console.log(response)
        this.heritageData = response
      },
      (error) => {
        console.log(error)
      }
    );
    this.video = "http://localhost:3000/"+this.heritageData['videos'][0]
    
  }

  id = ''
  heritageData = {}
  userData = {}
  showModal = false;
  warning = ""
  message = ""
  video = ""



  toggleModal(){
    console.log(this.showModal)
    this.showModal = !this.showModal;
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
    data.culturalAttraction = this.heritageData['_id']
    data.isEvent = false
    data.totalAmount = this.heritageData['ticketPrice']
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
        this.message= "Ticket Confomed."
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
