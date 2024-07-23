import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  login(data){
    return this.http.post('http://localhost:3000/login', data)
  }

  signup(data){
    return this.http.post('http://localhost:3000/signup', data)
  }

  loggedIn(){
    return !!localStorage.getItem('Token')
  }
}








