import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HiraganaCharacter } from "../../app/hiragana-character";
import { HIRAGANA_LIST } from "../../app/hiragana-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hiraganaList = HIRAGANA_LIST;

  selectedHira: HiraganaCharacter;

  showResult: Boolean;

  constructor(public navCtrl: NavController) {
    this.selectedHira = this.hiraganaList[Math.floor(Math.random() * this.hiraganaList.length)];
    this.showResult = false;
  }

  onNext() {
    this.selectedHira = this.hiraganaList[Math.floor(Math.random() * this.hiraganaList.length)];
    this.showResult = false;
  }

  onViewResult() {
    this.showResult = true;
  }

}
