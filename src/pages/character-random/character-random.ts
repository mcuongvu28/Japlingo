import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page } from './../../common/Page';
import { RandomService } from './../../services/random.service';
import { HiraCharacter } from "../../app/hiragana-character";

@Component({
  selector: 'page-character-random',
  templateUrl: 'character-random.html'
})
export class CharacterRandomPage implements Page {
  pageName: string;
  items: any;
  selectedItem: HiraCharacter;
  showResult: Boolean;

  constructor(private randomService: RandomService, public navCtrl: NavController, public navParams: NavParams) {
    this.showResult = false;
    this.pageName = navParams.get('name');
    this.items = navParams.get('items');
    this.selectedItem = this.randomService.random(this.items);
  }

  onNext(): void {
    this.selectedItem = this.randomService.random(this.items);
    this.showResult = false;
  }

  onViewResult(): void {
    this.showResult = true;
  }
}