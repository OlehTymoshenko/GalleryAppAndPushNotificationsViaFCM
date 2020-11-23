import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-booking',
  templateUrl: 'tab-booking.page.html',
  styleUrls: ['tab-booking.page.scss']
})
export class TabBookingPage {

  currentDateTime : string;
  maxDateTime : string;

  constructor() {
  }

  ngOnInit() {
    this.currentDateTime = new Date().toISOString();
    let time = new Date();
    time.setUTCFullYear(new Date().getUTCFullYear() + 1);
    this.maxDateTime = time.toISOString();
  }

  bookDateTime() {
    
  }

}