import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  addReservation(reservation : Reservation) {
    this.http.post("https://localhost:5001/api/Booking", reservation);
  }

  getAllReservations() {

  }
}
