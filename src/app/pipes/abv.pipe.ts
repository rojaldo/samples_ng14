import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value === 'number') {
      if (typeof args[0] === 'number' && args[0] > 0 && args[0] <= 100) {
        if (args[0] > value) {
          // integer part 
          let intPart = Math.floor(value);
          // decimal part as integer
          let decPart = Math.round((value - intPart) * 10);
          // return integer part + ',' + decimal part
          return intPart + ',' + decPart + '%';
        } else {
          console.error('AbvPipe: Wrong parametter: ' + args[0]);
          return value + '%';
        }
      } else {
        console.error('AbvPipe: value is not a number: ' + value);
        return value;

      }
    }
  }

}
