import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {MedalsPage} from '../medals/medals';
import {ProfilePage} from '../profile/profile'; 

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {

    
  
  }

_medals() {
    this.navCtrl.push(MedalsPage);
  }

_profile() {
    this.navCtrl.push(ProfilePage);
  }


}
