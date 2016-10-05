import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Request} from '../../services/request';
import {CategoryPage} from '../category/category';
import {CoachPage} from '../coach/coach';
import {ToplistPage} from '../toplist/toplist';
import {NewcoachesPage} from '../newcoaches/newcoaches';
import {PopularPage} from '../popular/popular';

@Component({
   templateUrl: 'explore.html'
})
export class ExplorePage {

  private Request : Request;
  AllCategories = null;

  constructor(private navCtrl: NavController, request: Request) {

    this.Request = request;
    this.getCategories();

  }

  // Get Categories from Server
  getCategories(){
    
      this.Request.getCategories().subscribe(
            data => this.AllCategories = data
        );

      
  }

  // Navigate to Coach
   _coach(coachData){

       this.navCtrl.push(CoachPage,{
            coachData: coachData,
          });

  }

  // Navigate to categorypage
  _category(name, id){

         this.navCtrl.push(CategoryPage,{
            categoryName: name,
            categoryId: id
          });

  }

  // Navigate to toplist
  _toplist(){

         this.navCtrl.push(ToplistPage,{

          });

  }

// Navigate to newcoaches
  _newcoaches(){

         this.navCtrl.push(NewcoachesPage,{

          });

  }

  // Navigate to popular
  _popular(){

         this.navCtrl.push(PopularPage,{

          });

  }





}




