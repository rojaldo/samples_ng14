import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  private _maxAbv = 65;
  maxAbv$ = new BehaviorSubject<number>(this.maxAbv);

  get maxAbv(): number {
    return this._maxAbv;
  }

  set maxAbv(value: number) {
    this._maxAbv = value;
    this.maxAbv$.next(this.maxAbv);
  }

  setMaxAbv(value: number, componentName?: string) {
    if(componentName !== undefined){
      console.log(componentName + ': ' + value);
      
    }
    this.maxAbv = value;
  }

  constructor() { }
}
