import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  _countries: string[] = [];
  countries$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { }

  get countries(): string[] {
    return [...this._countries];
  }

  getCountries(): void {
    let observer = {
      next: (data: any) => {
        console.log(data);
        for (const jsonCountry of data) {
          this._countries.push(jsonCountry.translations.spa.common.toLowerCase());
        }
        this.countries$.next(this._countries);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    }
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer)
  }
}
