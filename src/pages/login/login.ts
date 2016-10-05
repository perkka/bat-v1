import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
    templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private navCtrl: NavController) {
  
    

  }

  login() {
    this.navCtrl.push(TabsPage);
  }

}
