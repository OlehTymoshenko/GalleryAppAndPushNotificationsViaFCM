import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from './../models/reservation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private BOOKING_API_URL = "https://photo-gallery-webapi.herokuapp.com/api/Booking";

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  addReservation(reservation : Reservation) : Observable<any> {
    const headers = {
      "Content-Type": "application/json"
    };
    return this.http.post(this.BOOKING_API_URL, JSON.stringify(reservation), { headers });
  }

  getAllReservations() : Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.BOOKING_API_URL);
  }
}
