import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private router:Router) { }

  // User Management 
  getAllUsers(){
    return this.http.get('http://localhost:3000/users')
  }

  singleUser(id){
    return this.http.get("http://localhost:3000/user/"+id)
  }

  removeUser(id:number){
    return this.http.delete("http://localhost:3000/user/"+id)
  }

  updateUser(id, data){
    return this.http.put("http://localhost:3000/users/"+id, data)
  }

  // Heritage Management 
  getHeritages(){
    return this.http.get('http://localhost:3000/cultural-attractions')
  }

  getSingleHeritage(id){
    return this.http.get('http://localhost:3000/cultural-attractions/'+id)
  }

  createHeritages(data){
    return this.http.post('http://localhost:3000/cultural-attractions', data)
  }

  deleteHeritages(id){
    return this.http.delete("http://localhost:3000/culturalAttractions/"+id)
  }

  updateHeritage(id, data){
    return this.http.put("http://localhost:3000/cultural-attractions/"+id, data)
  }

  // Event Management 
  getEvents(){
    return this.http.get('http://localhost:3000/events')
  }

  createEvent(data){
    return this.http.post('http://localhost:3000/events', data)
  }

  updateEvent(id, data){
    return this.http.put("http://localhost:3000/events/"+id, data)
  }

  deleteEvent(id){
    return this.http.delete("http://localhost:3000/events/"+id)
  }
  singleEvent(id){
    return this.http.get("http://localhost:3000/events/"+id)
  }

  // Ticket Management
  getTickets(){
    return this.http.get('http://localhost:3000/tickets')
  }

  payment(data){
    return this.http.post('http://localhost:3000/tickets', data)
  }

  getVisitsDay(id){
    return this.http.get("http://localhost:3000/visits/"+id)
  }

  getEventVisitsDay(id){
    return this.http.get("http://localhost:3000/eventVisit/"+id)
  }

  getAllrevenue(){
    return this.http.get("http://localhost:3000/api/tickets/totalAmount")
  }

  ticketByUser(id){
    return this.http.get("http://localhost:3000/tickets/user/"+id)
  }

  revenuePerday(date){
    return this.http.get("http://localhost:3000/api/tickets/totalAmount/day?date="+date)
  }
}
