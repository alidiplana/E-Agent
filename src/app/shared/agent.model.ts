import { Package } from './package.model';

export class Agent {

  public id: number;
  public name: string;
  public email: string;
  public cellNo: string;
  public address: string;
  public introduction: string;
  public agentStatus: string;
  public headUser: string;
  public registrationNo: string;
  public image: string;
  public packages: Package[];

  constructor(id: number, name: string, email: string, cellNo: string, address: string, introduction: string, agentStatus: string, headUser: string, registrationNo: string, image: string, pkg: Package[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cellNo = cellNo;
    this.address = address;
    this.introduction = introduction;
    this.headUser = headUser;
    this.agentStatus = agentStatus;
    this.registrationNo = registrationNo;
    this.image = image;
    this.packages = pkg;
  }


}
