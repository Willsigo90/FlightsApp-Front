import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient) { }


  public getJourney(origin: string, destination: string): Observable<any> {
    const url = `https://localhost:7210/Journey?origin=${origin}&destination=${destination}`;
    return this.http.get<any>(url);
  }

}
