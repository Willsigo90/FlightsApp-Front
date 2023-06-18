import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'app';
  currentState: any;

  constructor(private stateService: StateService) 
    {
      
      this.stateService.currentState.subscribe(state => {
        this.currentState = state;
      });

  }

  updateState(newState: string) {
    this.stateService.updateState(newState);
  }
}
