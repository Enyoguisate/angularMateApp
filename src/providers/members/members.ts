import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the MembersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MembersProvider {



  constructor(public storage: Storage) {
  }

  getMembers(){
    return this.storage.get('members');
  }

  saveMembers(members: Member[]){
    return this.storage.set('members', members);
  }

  addMember(m: Member){
    return this.getMembers().then((members: Member[])=>{
      if(!members){
        members = [];
      }
      members.push(m);
      return this.saveMembers(members);
    });
  }

  deleteMember(m: Member){
    return this.getMembers().then((members: Member[])=>{
      let memberIndex = members.indexOf(m);
      members.splice(memberIndex, 1);
      return this.saveMembers(members);
    })
  }

  sortear(){
    return this.getMembers().then((members:Member[])=>{
      let winner =  members[Math.floor(Math.random()*members.length)];
      console.log('winner', winner);
      return winner;
    })
  }

  increaseWonCount(m: Member){
    return this.getMembers().then((members:Member[])=>{
      let index = members.indexOf(m);
      console.log('members', members);
      
      m.wonCount++;
      members[index] = m;
      return this.saveMembers(members);
    })
  }


}

export interface Member{
  name: string,
  photo: string,
  description: string,
  wonCount: number
}
