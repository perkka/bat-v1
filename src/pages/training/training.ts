import {Component, ViewEncapsulation} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Global} from '../../global/global';
import {Request} from '../../services/request';
import {HomePage} from '../home/home';



@Component({
    templateUrl: 'training.html',
  encapsulation: ViewEncapsulation.None
})
export class TrainingPage {

  public exercises = [];
  public currentExercise = {Name: "undefined"};

  constructor(private navCtrl: NavController, params:NavParams, private request: Request, 
              global: Global, public alertCtrl: AlertController, private viewCtrl: ViewController) {

   let workout = params.get("Workout")
   
   let ExerciseArray = [];

      for(let exercise in workout.Exercises){

        let exObj = JSON.parse(workout.Exercises[exercise]);

        // TODO: Remove substring when fixed space problem in database/admin
        if(exObj.id != null) ExerciseArray.push(exObj.id.substring(0, exObj.id.length - 1)); 
       
      }
        
      this.request.getWrkExercises(ExerciseArray).subscribe(
            data => this.setExercises(data)
        );



        // Hide the tabbs
       // document.querySelector("ion-tabbar")['style'].display = 'none';

        // Show the tabbs again
        //document.querySelector("ion-tabbar")['style'].display = 'flex';

        
   
  }


  startTraining(){

    let exSquare = document.querySelector(".exSquare");
    exSquare["style"].height = "50%";

    let start = document.querySelector(".start");
    let inTraining = document.querySelector(".inTraining");
    let stop = document.querySelector(".stop");
    let pause = document.querySelector(".pause");
    
    this.viewCtrl.showBackButton(false);

    start["style"].display = "none";
    inTraining["style"].display = "flex";
    
    this.nextExer[0];
    

  }

  inTraining(){

    let stop = document.querySelector(".stop");
    let pause = document.querySelector(".pause");

    stop["style"].display = "flex";
    pause["style"].display = "flex";

  }


  stopTraining(){

    this.endTraining();


  }

  pauseTraining(){


    
  }


   endTraining() {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to end the training?',
      message: 'If you end your training you will not be able to continue it later. If you want to take a break click on pause.',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            //console.log('Disagree clicked');


            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            //console.log('Agree clicked');
            //console.log(this.navCtrl.canGoBack());
            
            this._workoutprofile();

          }
        }
      ]
    });
    confirm.present();
  }






















  


  setExercises(data){

    this.exercises = data;
    

  }

  nextExer(i){

   this.currentExercise = this.exercises[i] 
   console.log(this.currentExercise)
  }


  _workoutprofile(){

         this.navCtrl.pop();

  }




}
