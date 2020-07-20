import { Pipe, PipeTransform } from '@angular/core';
import {Package} from './shared/package.model';

@Pipe({
  name: 'min',
  pure: false
})
export class MinPipe implements PipeTransform {

  transform(value: Package[], min: number): unknown {
    if(min === undefined || min === null) {
      console.log('alsdif min');
      return value;
    }
    const resultArray: Package[] = [];
    for (let i = 0; i < value.length; i++) {
      if( value[i].price >= min) {
        resultArray.push(value[i]);
      }
    }
    return resultArray;
  }

}
