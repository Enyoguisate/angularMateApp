import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Member, MembersProvider } from '../../providers/members/members';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  maximum: number = 2;
  minimum: number = 0;

  winner: Member;

  members: Member[];

  constructor(public navCtrl: NavController, public membersProvider: MembersProvider, public modalCtrl: ModalController) {
  }

  loadData(){
    this.membersProvider.getMembers().then((members: Member[])=>{
      this.members = members;
    });
  }

  addMember(){
    let modal = this.modalCtrl.create('MemberPage');
    modal.onDidDismiss(()=>{
      this.loadData();
    });
    modal.present();
  }

  ionViewDidLoad(){
    this.loadData();
  }
  
  sort(){
    this.membersProvider.sortear().then((winner: Member)=>{
      this.winner = winner;
    });
  }
}
