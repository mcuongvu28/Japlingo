import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CharacterListPage } from './../character-list/character-list';
import { CharacterRandomPage } from './../character-random/character-random';

/* Json import */
import * as hiraChracters from '../../assets/json/hira-characters.json';
import * as hira from '../../assets/json/hiragana.json';
import * as hiraCardinalNumbers from '../../assets/json/cardinal-numbers-hiragana.json';
import * as hiraDakuon from '../../assets/json/hira-dakuon.json';
import * as hiraYouon from '../../assets/json/hira-youon.json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /* Nav page */
  hiraCharacterPage;
  characterRandomPage;

  /* Nav params */
  hiraCharacterList;
  hiraList;
  hiraDakuonList;
  hiraYouonList;
  hiraCardinalNumbersList;

  constructor(public navCtrl: NavController) {
    // Nav page
    this.hiraCharacterPage = CharacterListPage;
    this.characterRandomPage = CharacterRandomPage;

    // Nav params
    this.hiraCharacterList = { items: hiraChracters, name: 'Hira Characters' };
    this.hiraList = { items: hira, name: 'Hira Random' };
    this.hiraDakuonList = { items: hiraDakuon, name: 'Hira Dakuon Random' };
    this.hiraYouonList = { items: hiraYouon, name: 'Hira Youon Random' };
    this.hiraCardinalNumbersList = { items: hiraCardinalNumbers, name: 'Hira Cardinal Numbers' };
  }
}
