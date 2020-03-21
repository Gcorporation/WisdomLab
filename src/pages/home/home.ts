import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../providers/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  request: any;
  searchTerm: string = '';
  public items: any = [];
  constructor(public navCtrl: NavController,private httpService: HttpService) {

  }
  ionViewDidLoad(){
    this.myURL();
  }
  myURL(){
    {
      this.httpService.getMyURL().subscribe((res) => {
         console.log("Res is ------->"+JSON.stringify(res));
         this.items = res;
        }, (err) => {
           console.log("Error Fetching DATA")  
        });
    }
  }
  detailsScreen(Request) {
    this.request=Request;
    this.navCtrl.push('DetailsPage', {request:this.request});
  }
}
