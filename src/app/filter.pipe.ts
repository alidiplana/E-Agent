import { Pipe, PipeTransform } from '@angular/core';
import {Package} from './shared/package.model';
import {Agent} from './shared/agent.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Package[], filterString: string): any {
    if(filterString === undefined || filterString === null || filterString === '') {
      console.log('alsdif');
      return value;
    }

    const resultArray: Package[] = [];
    for(let i = 0; i < value.length; i++){
      if( value[i].name === filterString){
        resultArray.push(value[i]);
      }
    }
    console.log(value);
    return resultArray;
  }

}
