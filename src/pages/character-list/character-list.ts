import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page } from './../../common/Page';

@Component({
    selector: 'page-character-list',
    templateUrl: 'character-list.html'
})
export class CharacterListPage implements Page{
    pageName: string;
    items: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pageName = navParams.get('name');
        this.items = navParams.get('items');
    }
}