import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JourneyService } from 'src/app/services/journey.service';
import { ApiService } from 'src/app/services/api.service';
import { Journey } from '../../models/journey';
import { StateService } from 'src/app/services/state.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  form: FormGroup;
  originControl: FormControl;
  destinationControl: FormControl;
  currencyControl: FormControl;
  currencyControlUpdate: FormControl;
  
  journeyResponse: any;
  currencyResponse: any;

  currentState: any;
  anio: any;

  currencies: string[] = ['USD', 'COP', 'ARS', 'EUR', 'GBP', 'AUD', 'CLP'];

  constructor(private formBuilder: FormBuilder, 
    private journeyService: JourneyService, 
    private apiService: ApiService,
    private stateService: StateService) 
    {
      this.originControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
      this.destinationControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
      this.currencyControl = new FormControl('USD', [Validators.required]);
      this.currencyControlUpdate = new FormControl('USD', [Validators.required]);
      
      this.stateService.currentState.subscribe(state => {
        this.currentState = state;
      });

      this.form = this.formBuilder.group({
        origin: this.originControl,
        destination: this.destinationControl
    });

    this.anio = new Date().getFullYear();

  }
  
  ngOnInit(): void {
    this.updateState(this.anio);
  }

  convertToUpperCase(control: FormControl) {
    control.setValue(control.value.toUpperCase());
  }

  async consumeService() {
    try {
      const origin = this.originControl.value;
      const destination = this.destinationControl.value;
      const currency = this.currencyControl.value;
  
      this.journeyResponse = await firstValueFrom(this.apiService.getJourney(origin, destination));
      console.log(this.journeyResponse);
  
      this.currencyResponse = await firstValueFrom(this.apiService.getCurrency(currency));
    } catch (error) {
      // Manejo de errores 
    }
  }

  updateState(newState: string) {
    this.stateService.updateState(newState);
  }
}