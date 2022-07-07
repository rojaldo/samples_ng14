import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apod!: Apod;
  apod$ = new BehaviorSubject<any>(this._apod);

  constructor(private http: HttpClient) { }

  getApod(strDate?: string) {

    let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    if (strDate) {
      url += '&date=' + strDate;
    }
    const oberserver = {
      next: (data: any) => {
        this._apod = new Apod(data);
        this.apod$.next(this._apod);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete: ' + this._apod);
      }

    }    
    
    if(this._apod === undefined || (strDate !== undefined && !this._apod.isSameDate(strDate))) {
      this.http.get(url).subscribe(
        oberserver);
    }

  }


}
