import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig, API_CONFIG } from 'src/app/api-config';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private apiConfig: ApiConfig
  ) {}


  public getJourney(origin: string, destination: string): Observable<any> {
    const url = `${this.apiConfig.apiUrl}/Journey?origin=${origin}&destination=${destination}`;
    return this.http.get<any>(url);
  }

  public getCurrency(currency: string): Observable<any> {
    const url = `${this.apiConfig.apiUrl}/Currency?currency=${currency}`;
    return this.http.get<any>(url);
  }
}