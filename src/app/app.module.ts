import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';
import { ApiConfig, API_CONFIG } from 'src/app/api-config';
import { ApiService } from './services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import { FooterComponent } from './components/footer/footer.component';
import { JourneyComponent } from './components/journey/journey.component';

const apiConfig: ApiConfig = {
  apiUrl: 'https://localhost:7210'
};


@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FooterComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    { provide: API_CONFIG, useValue: apiConfig },
    ApiService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
