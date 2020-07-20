import {User} from './user.model';

export class UserService {
  private users: User[];

  addUser(user: User){
    this.users.push(user);
  }

}
