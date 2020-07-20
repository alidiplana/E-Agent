import { Pipe, PipeTransform } from '@angular/core';
import {Package} from './shared/package.model';
import {Agent} from './shared/agent.model';

@Pipe({
  name: 'filterAgent'
})
export class FilterAgentPipe implements PipeTransform {

  transform(value: Agent[], filterString: string): unknown {
    if(filterString === undefined || filterString === null || filterString === '') {
      console.log('alsdif');
      return value;
    }

    const resultArray: Agent[] = [];
    for(let i = 0; i < value.length; i++){
      if( value[i].name === filterString){
        resultArray.push(value[i]);
      }
    }
    console.log(value);
    return resultArray;
  }

}
