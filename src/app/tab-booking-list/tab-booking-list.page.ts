import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Reservation } from '../shared/models/reservation';
import { BookingService } from './../shared/services/booking.service';

@Component({
  selector: 'app-tab-booking-list',
  templateUrl: 'tab-booking-list.page.html',
  styleUrls: ['tab-booking-list.page.scss']
})
export class TabBookingListPage {

  public destroyed = new Subject<any>();
  reservations : Observable<Reservation[]>;

  constructor(
    private bookingService: BookingService,
    private router : Router
    ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event : RouterEvent) => event instanceof NavigationEnd), 
      takeUntil(this.destroyed)
    ).subscribe(() => {
      this.loadRevervations();
    })
  }

  ngOnDestroy() : void {
    this.destroyed.next();
    this.destroyed.complete();    
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
