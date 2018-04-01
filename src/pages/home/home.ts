import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HiraganaPage } from './../hiragana/hiragana';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage;

  constructor(public navCtrl: NavController) {
    this.pushPage = HiraganaPage;
  }
}
