import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  maximum: number = 2;
  minimum: number = 0;

  winner: any = { name: '', index: 0 };

  mobileTeam: any = [
    { name: 'Rama', index: 0 },
    { name: 'Isma', index: 1 },
    { name: 'Victor', index: 2 },
  ]

  constructor(public navCtrl: NavController) {

  }

  sort(){
    var randomnumber = Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum;
    this.mobileTeam.forEach(member => {
      if(member.index === randomnumber){
        this.winner = member;
      }
    });
    
  }
}
