import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Global} from '../../global/global';
import {Request} from '../../services/request';
import {TrainingPage} from '../training/training';

@Component({
   templateUrl: 'workout.html'
})
export class WorkoutPage {

 private work;

  constructor(private navCtrl: NavController, params:NavParams,request: Request, global: Global) {

   let workout = params.get("Workout")[0];
   this.work = workout;

  // Show the tabbs again
   //document.querySelector("ion-tabbar")['style'].display = 'flex';

  }

  _Training(){


      this.navCtrl.push(TrainingPage,{
            Workout: this.work
          });


  }




}
