import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/timeout';

import { AlertController, Platform } from 'ionic-angular';

@Injectable()

export class HttpService {

  constructor(public http: Http, public alertCtrl: AlertController, public platform: Platform ) {
  console.log('Hello HttpService Provider');

  }

  // My URL API

  getMyURL(): Observable<any> {

    return this.http.get("https://api.publicapis.org/entries?category=anime&https=true")

      .timeout(40000)

      .map(res => res.json().entries);

  }

}