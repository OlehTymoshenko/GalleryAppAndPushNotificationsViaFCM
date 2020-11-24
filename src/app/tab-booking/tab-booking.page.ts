import { Component } from '@angular/core';

import { Reservation } from '../shared/models/reservation';
import { BookingService } from './../shared/services/booking.service';


@Component({
  selector: 'app-tab-booking',
  templateUrl: 'tab-booking.page.html',
  styleUrls: ['tab-booking.page.scss']
})
export class TabBookingPage {

  currentDateTime : string;
  maxDateTime : string;

  reservation : Reservation;

  constructor(
    private bookingService : BookingService,
  ) {
  }

  ngOnInit() {
    this.currentDateTime = new Date().toISOString(); // min date time - current datetime
    
    let time = new Date();
    time.setUTCFullYear(new Date().getUTCFullYear() + 1); // max date - current datetime + 1 year
    this.maxDateTime = time.toISOString();
    this.resetInputFields();
  }

  bookDateTime() : void {
    if((this.reservation.name !== "") && 
        (this.reservation.duration !== "") && 
        (this.reservation.reservationDateTime !== "")) {
          console.log(this.reservation.duration);
          //let durationObj = new Date(this.reservation.duration);
          //this.reservation.duration = durationObj.getUTCHours()+":"+durationObj.getUTCMinutes();

          console.log(JSON.stringify(this.reservation));
          this.bookingService.addReservation(this.reservation);
          this.resetInputFields();
        }
  }

  private resetInputFields() : void {
    this.reservation = new Reservation("", this.currentDateTime, "01:00");
  }
}