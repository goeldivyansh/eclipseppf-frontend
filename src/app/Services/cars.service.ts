import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  userObj: any | null;
  user: any | null;
  url = 'http://localhost:3000';
  resp: any;

  constructor(private http:HttpClient, private router: Router) {}

  registerCarPpfWarranty(options: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': options.token
    });

    console.log("Entering registerCarPpfWarranty | credentials = ", options.ppfRollInfo);
    return this.resp = this.http.post(`${this.url}/carppf/${options.username}/warranty`, options.ppfRollInfo, {headers});
  }
  
  getWarranty(options: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': options.token
    });
    console.log('options: ', options);
    let params;
    if (options.roll_no && options.car_no) {
      params = new HttpParams()
        .set('roll_no', options.roll_no)
        .set('car_no', options.car_no);
    } else if (options.roll_no) {
      params = new HttpParams().set('roll_no', options.roll_no)
    } else if (options.car_no) {
      params = new HttpParams().set('car_no', options.car_no);
    }

    console.log("Entering getWarranty = ", options);
    return this.resp = this.http.get(`${this.url}/carppf/${options.username}/warranty`, {params, headers });
  }


  getDealerCars(options: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': options.token
    });

    let params = new HttpParams()
      .set('username', options.username)
      .set('startdate', options.startdate)
      .set('enddate', options.enddate);
    
    console.log("Entering getDealerCars = ", options);
    return this.resp = this.http.get(`${this.url}/carppf/${options.username}/getMyCars`, {params, headers});
  }
}
