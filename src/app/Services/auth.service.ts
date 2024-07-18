import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dealerObj: any | null;
  dealer: any | null;
  url = 'http://localhost:3000';
  resp: any;

  constructor(private http:HttpClient) {}

  registerDealer(options: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': options.token
    });

    console.log("Entering registerDealer | dealerInfo = ", options.dealerInfo);
    return this.resp = this.http.post(`${this.url}/auth/signup`, options.dealerInfo, { headers });
  }
  
  updateDealer(options: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': options.token
    });

    console.log("Entering updateDealer | dealerInfo = ", options.dealerInfo);
    return this.resp = this.http.put(`${this.url}/user/${options.dealerInfo.username}/updateUser`, options.dealerInfo, { headers });
  }

  loginDealer(credentials: Object){
    console.log("Entering loginDealer | credentials = ", credentials);
    return this.resp = this.http.post(`${this.url}/auth/login`, credentials);
  }
  
  getDealerDetails(options: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': options.token
    });

    console.log("Entering getDealerDetails | username = ", options.username);
    return this.http.get(`${this.url}/user/${options.username}/getUser`, { headers });
  }

  // storeDealerDetails(dealerObj: object){
  //   localStorage.setItem("dealer",JSON.stringify(dealerObj));
  //   return true;
  // }

  // isLoggedIn(){
  //   let dealer = localStorage.getItem("dealer");
  //   if(dealer == undefined || dealer == null || dealer === ""){
  //     return false;
  //   }
  //   return true;
  // }

  // getDealerFromLocal() {
  //   this.dealer = localStorage.getItem("dealer");
  //   return JSON.parse(this.dealer);
  // }

  // logout(){
  //   localStorage.removeItem("dealer");
  //   return true;
  // }

  // getDealerToken(){
  //   this.dealerObj = localStorage.getItem("dealer");
  //   return (JSON.parse(this.dealerObj)).token;
  // }
}
