import { Pipe, PipeTransform } from '@angular/core';
import {Package} from './shared/package.model';

@Pipe({
  name: 'days',
  pure: false
})
export class DaysPipe implements PipeTransform {

  transform(value: Package[], days: number, min: number, max: number): unknown {
    if(days === undefined || days === null || days === 0) {
      console.log('alsdif days');
      return value;
    }
    const resultArray: Package[] = [];
    for (let i = 0; i < value.length; i++) {
      if( value[i].days === days){
        resultArray.push(value[i]);
      }
    }
    return resultArray;

  }




}
