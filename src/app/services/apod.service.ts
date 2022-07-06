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
    console.log('getApod: ' + new Date(this._apod.date).getDate() + ' : '+ new Date().getDate());
    
    if(!this._apod.date || new Date(this._apod.date).getDate() !== new Date().getDate()) {
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(
        oberserver);
    }

  }


}
