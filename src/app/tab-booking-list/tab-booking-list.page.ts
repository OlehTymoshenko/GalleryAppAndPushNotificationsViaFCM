import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from '../shared/models/reservation';
import { BookingService } from './../shared/services/booking.service';

@Component({
  selector: 'app-tab-booking-list',
  templateUrl: 'tab-booking-list.page.html',
  styleUrls: ['tab-booking-list.page.scss']
})
export class TabBookingListPage {

  reservations : Observable<Reservation[]>;

  constructor(
    private bookingService: BookingService
    ) {}

  ngOnInit() {
    this.loadRevervations();
  }

  private loadRevervations()
  {
    this.reservations = this.bookingService.getAllReservations().pipe(map(data => {
      return data.map(reserv => {
        let reservDateTime = new Date(reserv.reservationDateTime).toUTCString();
        reservDateTime = reservDateTime.substring(0, reservDateTime.lastIndexOf(":")); // delete GMT from end of string
        return new Reservation(reserv.name, reservDateTime, reserv.duration, reserv?.id);
      });
    }));
  }
}
