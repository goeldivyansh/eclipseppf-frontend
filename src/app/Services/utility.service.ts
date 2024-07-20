import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WarrantyInfo } from '../WarrantyInfo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  dealerObj: any | null;
  warrantyList: any | null;
  constructor() { }

  epochToDate(epoch: number) {
    // Convert epoch to milliseconds and create a new Date object
    const date = new Date(epoch);
  
    // Extract day, month, and year
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero if needed
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero and month is 0-indexed
    const year = date.getFullYear();
  
    // Format date as 'DD-MM-YYYY'
    return `${day}-${month}-${year}`;
  }

  convertDateToEpoch(dateString: string) {
    // Split the date string into day, month, and year components
    let parts = dateString.split('-');
    
    // Ensure parts array has exactly three elements (day, month, year)
    if (parts.length !== 3) {
        console.error('Invalid date format');
        return null;
    }
    
    // Parse day, month, and year from parts array
    let year = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // Month is zero-indexed in JavaScript (0-11)
    let day = parseInt(parts[2], 10);
    
    // Create a Date object with parsed components
    let dateObject = new Date(year, month, day);
    
    // Get epoch time in milliseconds
    let epochTime = dateObject.getTime();
    
    return epochTime;
  }

  getDateEpochFromTimestamp(epoch: any) {
    // Get current epoch time in milliseconds
  
    // Create a new Date object using the current epoch time
    let dateObject = new Date(epoch);
  
    // Set the time to midnight (00:00:00) for the current date
    dateObject.setHours(0, 0, 0, 0);
  
    // Get epoch time in milliseconds for midnight of the current date
    let dateEpochTime = dateObject.getTime();
  
    return dateEpochTime;
  }

  //-------------------------//
  storeWarrantyListInLocal(warrantyList: object){
    localStorage.setItem("warrantyList",JSON.stringify(warrantyList));
    return true;
  }

  getWarrantyListFromLocal() {
    this.warrantyList = localStorage.getItem("warrantyList");
    // localStorage.removeItem("warrantyList");
    return JSON.parse(this.warrantyList);
  }

  // ----------------------- //
  storeDealerDetailsInLocal(dealerObject: object){
    localStorage.setItem("dealer",JSON.stringify(dealerObject));
    return true;
  }

  isLoggedIn(){
    let dealer = localStorage.getItem("dealer");
    if(dealer == undefined || dealer == null || dealer === ""){
      return false;
    }
    return true;
  }

  getDealerFromLocal() {
    this.dealerObj = localStorage.getItem("dealer");
    return JSON.parse(this.dealerObj);
  }

  logout(){
    localStorage.removeItem("dealer");
    return true;
  }

  getDealerToken(){
    this.dealerObj = localStorage.getItem("dealer");
    return (JSON.parse(this.dealerObj)).token;
  }

}
