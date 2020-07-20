import {Rating} from './rating.model';

export class Package {
  public id: number;
  public name: string;
  public packageType: string;
  public description: string;
  public packageStatus: boolean;
  public price: number;
  public validDate: string;
  public startDate: string;
  public endDate: string;
  public image: string;
  public days: number;
  public rating: Rating[];

  constructor(id: number, name: string, image: string, packageType: string, description: string, packageStatus: boolean, price: number, validDate: string, startDate: string, endDate: string, days: number, rating: Rating[]) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.packageType = packageType;
    this.description = description;
    this.packageStatus = packageStatus;
    this.price = price;
    this.validDate = validDate;
    this.startDate = startDate;
    this.endDate = endDate;
    this.days = days;
    this.rating = rating;
  }

  addRating(newRating: Rating) {
    this.rating.push(newRating);
  }
}
