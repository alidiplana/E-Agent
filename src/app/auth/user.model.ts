import {Package} from '../shared/package.model';

export class User{
  constructor(
    public email: string,
    public id: string,
    public SelectPackages: Package[],
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
