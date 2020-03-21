import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  data: any;
  details: any;
  title: any;
  details1: any;
  description: any;
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('request');
    console.log("data ----->"+JSON.stringify(this.data));
    this.details = JSON.stringify(this.data);
    this.title = this.data.API;
    this.description = this.data.Description;
    this.category = this.data.Category;
    console.log("Title------>",this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
   
  }

}
