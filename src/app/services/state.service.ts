import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateSource = new BehaviorSubject<string>('initial state');
  currentState = this.stateSource.asObservable();

  constructor() { }

  updateState(newState: string) {
    this.stateSource.next(newState);
  }
}