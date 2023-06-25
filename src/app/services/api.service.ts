import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig, API_CONFIG } from 'src/app/api-config';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private apiConfig: ApiConfig
  ) {}


  public getJourney(origin: string, destination: string): Observable<any> {
    const url = `${environment.apiUrl}/Journey?origin=${origin}&destination=${destination}`;
    return this.http.get<any>(url);
    
  }

  public getCurrency(currency: string): Observable<any> {
    const url = `${environment.apiUrl}/Currency?currency=${currency}`;
    return this.http.get<any>(url);
  }
}