import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  beers: Beer[] = [];
  beers$ = new BehaviorSubject<Beer[]>([]);

  constructor(private http: HttpClient) { }

  getBeers() {
    let observer = {
      next: (data: any) => {
        console.log(data);
        for (const beer of data) {
          this.beers.push(new Beer(beer));
        }
        this.beers$.next(this.beers);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    }
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(observer);
  }
}
