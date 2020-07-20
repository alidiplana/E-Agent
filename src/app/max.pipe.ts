import { Pipe, PipeTransform } from '@angular/core';
import {Package} from './shared/package.model';

@Pipe({
  name: 'max',
  pure: false
})
export class MaxPipe implements PipeTransform {

  transform(value: Package[], max: number): unknown {
    if(max === undefined || max === null) {
      console.log('alsdif max');
      return value;
    }
    const resultArray: Package[] = [];
    for (let i = 0; i < value.length; i++) {
      if( value[i].price <= max) {
        resultArray.push(value[i]);
      }
    }
    return resultArray;
  }

}
