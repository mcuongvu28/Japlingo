import { HiraService } from './../../app/services/hiragana.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HiraganaCharacter } from "../../app/hiragana-character";
import * as hira from '../../assets/json/hiragana.json';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/do'
// import 'rxjs/add/operator/catch'

@Component({
  selector: 'page-hira',
  templateUrl: 'hiragana.html'
})
export class HiraganaPage {
  hiragana: any;
  selectedHira: HiraganaCharacter;
  showResult: Boolean;

  constructor(private service: HiraService, public navCtrl: NavController) {
    this.showResult = false;
    // this.service.getHiraJson()
    //   .subscribe(
    //     data => {
    //       this.hiragana = data;
    //       this.selectedHira = this.hiragana[Math.floor(Math.random() * this.hiragana.length)];
    //       console.log(this.hiragana);
    //     },
    //     err => console.log(err),
    //     () => console.log('complete')
    //   );
    this.hiragana = hira;
    console.log(this.hiragana);
    this.selectedHira = this.service.random(this.hiragana);
  }

  onNext() {
    this.selectedHira = this.service.random(this.hiragana);
    this.showResult = false;
  }

  onViewResult() {
    this.showResult = true;
  }

}
