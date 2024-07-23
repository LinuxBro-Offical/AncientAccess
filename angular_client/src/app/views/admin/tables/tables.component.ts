import { Component, OnInit, Input } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
})
export class TablesComponent implements OnInit {
  constructor(private router:Router, private admin:AdminService) {}

  ngOnInit(): void {
    this.getAllheritages()
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

  eventData = {}
  showModal = false;
  showEditModal = false;
  heritageData = []
  selectedEvent = {}

  toggleModal(){
    this.showModal = !this.showModal;
  }

  toggleEditModal(event:object){
    this.selectedEvent = event
    this.showEditModal = !this.showEditModal;
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
  onCreate(data){
    console.log(data)
    if(data.isFreeEvent===true){
      data.ticketPrice=0
    }
    if (data.isFreeEvent==''){
      data.isFreeEvent = false
    }
    this.admin.createEvent(data).subscribe(
      (response:any) => {
        this.showModal = !this.showModal;
        this.admin.getEvents().subscribe(
          (response:any) => {
            this.eventData = response.events
            console.log("event Data", this.eventData)
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

  deleteEvent(id){
    this.admin.deleteEvent(id).subscribe(
      (response:any) => {
        this.admin.getEvents().subscribe(
          (response:any) => {
            this.eventData = response.events
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

  onEdit(event, data){
    console.log(data)
    if(data.isFreeEvent===true){
      data.ticketPrice=0
    }
    if(data.ticketPrice !==''){
      event.isFreeEvent=false
    }
    const keys =Object.keys(data).filter(key => data[key] !== '')
    for(const item in event){
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == item){
          event[item] = data[key]
        }
      }
    }
    this.admin.updateEvent(event._id, event).subscribe(
      (response:any) => {
        this.showEditModal = !this.showEditModal;
        this.admin.getEvents().subscribe(
          (response:any) => {
            this.eventData = response.events
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

  getHeritage(id){
    return this.heritageData.find(obj => obj._id == id).title
  }

  changeDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    return formattedDate
  }
}
  