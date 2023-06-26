import { Component, OnInit, Input  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JourneyService } from 'src/app/services/journey.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  currencyControl: FormControl;
  currencyControlUpdate: FormControl;
  currencies: string[] = ['USD', 'COP', 'ARS', 'EUR', 'GBP', 'AUD', 'CLP'];

  @Input() journeyResponse: any;
  @Input() currencyResponse: any;
  constructor(private formBuilder: FormBuilder, 
    private journeyService: JourneyService, 
    private apiService: ApiService) 
    { 
      this.currencyControl = new FormControl('USD', [Validators.required]);
      this.currencyControlUpdate = new FormControl('USD', [Validators.required]);
    }

  ngOnInit(): void {
  }


  onChangeCurrency(lang: any) {
    console.log(lang.value);
    this.apiService.getCurrency(lang.value).subscribe(
      (response) => {
        this.currencyResponse = response;
        
      },
      (error) => {
      }
    );
  }

}
