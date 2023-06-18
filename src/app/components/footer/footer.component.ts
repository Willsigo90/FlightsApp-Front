import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentState: any;
  constructor(private stateService: StateService) 
  {
    
    this.stateService.currentState.subscribe(state => {
      this.currentState = state;
    });

}

  ngOnInit(): void {
  }

  updateState(newState: string) {
    this.stateService.updateState(newState);
  }
}
