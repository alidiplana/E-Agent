import {Agent} from '../shared/agent.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Package} from '../shared/package.model'
import {PackageService} from '../package/package.service';
import {Subject} from 'rxjs';
import {Rating} from '../shared/rating.model';

@Injectable()
export class AgentService {
  agentSelected = new EventEmitter<Agent>();
  agentChanged = new Subject<Agent[]>();
  returnPackage: Package;
  currentRatingId = 0;

  agentFetched = false;
  currentEmail = '';

  // private agents: Agent[] = [
  //   new Agent(1,'Amjad Ali', 'test@mail.com','+923331234567','Chiniot Road, Lonywala faisalabad', 'I am working from 4 years', 'available', 'false', '123456789', 'https://images.squarespace-cdn.com/content/v1/5c097ee0b10598d05f6f1728/1583410053125-UZ11C0M8IUOMQHMUVE67/ke17ZwdGBToddI8pDm48kGXoD000J7kx3NE7W-LXpdwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcSHIBb6yNmvYkAyvF3loIw6LWPhmq3jJqr-f9nvyP7bW--NA7--1aw0mnW_uWXk87/montero-chicago-professional-headshot.jpg',
  //   [
  //     new Package(1,'Comfortable package', 'http://www.alkarimee.com/Images/hajj/Hajj_silver_package2019.jpg', 'hajj', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley  ', true,150000, '25-aug-2020','3-sep-2020','4-oct-2020'),
  //     new Package(2,'Best package', 'https://ilm.com.pk/wp-content/uploads/2017/12/Private-Hajj-Package-2019-Pakistan-Price.jpg', 'umrah', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', true,15000, '25-aug-2020','3-sep-2020','14-oct-2020'),
  //     new Package(3,'Test package', 'http://www.shirazitravels.com/wp-content/uploads/Shirazi-Package-.jpg','umrah', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ', true,120000, '25-aug-2020','3-sep-2020','4-oct-2020' )
  //   ]),
  //   new Agent(2,'Muhammad Nauman', 'test1@mail.com','+923331844567', 'Lonywala address', 'I am working from 3 years and i am good at it.', 'away', 'true', '123456789', 'https://images.squarespace-cdn.com/content/v1/5c097ee0b10598d05f6f1728/1583409919250-Y0PIX4JJM1PG0YYRV422/ke17ZwdGBToddI8pDm48kLcATiTgGSRcWhnnE29PPhV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnm4Ek6c6YJYE3gl9iwgPJKuD1eUyBRhVHX-JoZFhsZdCHdHnfz7ASGVLbxytnZaj/alzheimers-board-chicago-corporate-headshot.jpg',
  //   [
  //     new Package(4,'Test package', 'http://www.shirazitravels.com/wp-content/uploads/Shirazi-Package-.jpg' ,'umrah', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ', true,80000, '25-aug-2020','3-sep-2020','4-oct-2020'),
  //     new Package(5,'Test package 2', 'http://www.shirazitravels.com/wp-content/uploads/Shirazi-Package-.jpg' ,'umrah', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ', true,200000, '25-aug-2020','3-sep-2020','4-oct-2020')
  //   ]),
  //   new Agent(3,'Saad', 'test2@mail.com','+923331314567', 'Lonywala address', 'I am brilliant at my job', 'away', 'true', '123456789', 'https://images.squarespace-cdn.com/content/v1/5c097ee0b10598d05f6f1728/1583409919250-Y0PIX4JJM1PG0YYRV422/ke17ZwdGBToddI8pDm48kLcATiTgGSRcWhnnE29PPhV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnm4Ek6c6YJYE3gl9iwgPJKuD1eUyBRhVHX-JoZFhsZdCHdHnfz7ASGVLbxytnZaj/alzheimers-board-chicago-corporate-headshot.jpg',
  //   [
  //     new Package(6,'Test package 3', 'http://www.shirazitravels.com/wp-content/uploads/Shirazi-Package-.jpg' ,'umrah', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ', true,80000, '25-aug-2020','3-sep-2020','4-oct-2020'),
  //     new Package(7,'Test package 4', 'http://www.shirazitravels.com/wp-content/uploads/Shirazi-Package-.jpg' ,'umrah', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ', true,200000, '25-aug-2020','3-sep-2020','4-oct-2020')
  //   ])
  // ];

   private agents: Agent[] = [];

  constructor(private packageService: PackageService) {
  }

  setAgents(agents: Agent[]){
    this.agents = agents;
  }

  getAgents() {
    return this.agents.slice();
  }

  getAgent(index: number){
    // return this.agents[index];
    const agent = this.agents.find(
      (a) => {
        return a.id === index;
      }
    );
    return agent;
  }

  getPackage(index: number){

    for (let i = 0 ; i < this.agents.length; i++){
      for (let j = 0 ; j < this.agents[i].packages.length; j++) {
        if(this.agents[i].packages[j].id === index){
          this.returnPackage = this.agents[i].packages[j];
        }
      }
    }
    return this.returnPackage;
  }

  updateAgent(id: number, ag: Agent){

    let index = 0;
    // this.agents[id] = ag;
    const agentT = this.agents.find(a=> {
      return a.id === id;
    }
    );
    index = agentT.id;
    for (let i = 0; i < this.agents.length; i++) {
      if(this.agents[i].id === id){
        this.agents[i] = ag;
      }
    }
    this.agentChanged.next(this.agents.slice());
  }
  updatePackage(id: number, newPackage: Package) {
    for (let i = 0; i < this.agents.length; i++) {
      for ( let j = 0; j < this.agents[i].packages.length; j++){
        if(this.agents[i].packages[j].id === id){
          this.agents[i].packages[j] = newPackage;
        }
      }
    }

  }
  onAgentAdded(newAgent: Agent) {
    let largestId = 0;
    for (let i = 0; i < this.agents.length; i++){
      largestId = this.agents[i].id;

    }
    largestId += 1;
    newAgent.id = largestId;
    this.agents.push(newAgent);
    largestId = 0;
    this.agentChanged.next(this.agents.slice());
  }

  // createAddAgent() {
  //   this.addAgent = new Agent(0, '','','','',true,'','',null);
  // }

  onPackageAdded(id: number, newPackage: Package) {
    let packageId;
    let max = 0;
    for (let i = 0; i < this.agents.length; i++){
      for (let j = 0; j < this.agents[i].packages.length; j++){
        if(this.agents[i].packages[j].id > max){
          max = this.agents[i].packages[j].id;
        }
      }
    }
    newPackage.id = max + 1;
    console.log('alsdif');
    for (let i = 0; i < this.agents.length; i++){
      if(this.agents[i].id === id) {
        this.agents[i].packages.push(newPackage);
      }
    }
  }


  // addRating(packageId: number, newRating: Rating) {
  //   for (let i = 0; i < this.agents.length; i++){
  //     for (let j = 0; j < this.agents[i].packages.length; j++){
  //         if(this.agents[i].packages[j].id === packageId){
  //           newRating.id = this.currentRatingId;
  //           console.log('find');
  //           this.agents[i].packages[j].rating.push(newRating);
  //           this.currentRatingId ++;
  //         }
  //     }
  //   }
  // }

  getRatings(id: number) {

  }
  //   for (let i = 0; i < this.agents.length; i++) {
  //     for (let j = 0; j < this.agents[i].packages.length; j++){
  //       if(this.agents[i].packages[j].id === id){
  //         return this.agents[i].packages[j].rating.length === 0 ? 0 : this.agents[i].packages[j].rating.length;
  //       }
  //     }
  //   }
  // return 0;
  // }

}

