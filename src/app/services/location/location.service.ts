import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location: any;
  constructor(public router: Router) {
    this.location = "GLOBAL";
    console.log("service");
    this.router.navigate["/main"];
   }
}
