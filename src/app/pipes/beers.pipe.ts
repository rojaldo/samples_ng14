import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';

@Pipe({
  name: 'beers'
})
export class BeersPipe implements PipeTransform {

  transform(value: any | null, ...args: unknown[]): Beer[] {

    //check that value is a Beer array
    if (value instanceof Array<Beer>) {
      if (value) {
        return value;
      }
    }else {
      console.error('BeersPipe: value is not a Beer array: ' + value);
      return value
    }
    return [];
  }

}
