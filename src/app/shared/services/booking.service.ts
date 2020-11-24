import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from './../models/reservation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  addReservation(reservation : Reservation) : void {
    const headers = {
      "Content-Type": "application/json"
    };
    this.http.post("https://localhost:5001/api/Booking", JSON.stringify(reservation), { headers }).subscribe(data => {
      console.log(JSON.stringify(data))
    },
    error => {
      console.log(error);
    })
  }

  getAllReservations() : Observable<Reservation[]> {
    return this.http.get<Reservation[]>("https://localhost:5001/api/Booking");
  }
}
