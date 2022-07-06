import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apod: any = {};
  apod$ = new BehaviorSubject<any>(this._apod);

  constructor(private http: HttpClient) { }

  getApod() {
    const oberserver = {
      next: (data: any) => {
        this._apod = data;
        this.apod$.next(this._apod);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete: ' + this._apod);
      }

    }
    
    if(!this._apod.date) {
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(
        oberserver);
    }

  }


}
