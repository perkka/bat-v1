import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from '../pages/login/login';
import {Request} from '../services/request';
import {Global} from '../global/global';
import {Utils} from '../global/utils';
import {TabsPage} from '../pages/tabs/tabs';

@Component({
  template: '<ion-nav [root]="tabsPage"></ion-nav>',
  providers: [Request, Global]
})
export class MyApp {

  private rootPage: any;
  private loginPage: any;
  private tabsPage: any;

  constructor(private platform: Platform) {

   // this.loginPage = LoginPage;
    this.tabsPage = TabsPage;

    platform.ready().then(() => {
  

      StatusBar.styleDefault();
    });
  }
}

