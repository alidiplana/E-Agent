import {Package} from '../shared/package.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PackageService {
  packageSelected: Package;

  // public getPackage(index: number) {
  //   return this.packages[index];
  // }

  // getPackage(index: number){
  //
  //   const packag = this.packages.find(
  //     (p) =>{
  //       return p.id === index;
  //     }
  //   );
  //   return packag;
  // }

}
