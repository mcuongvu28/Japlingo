import { Injectable } from '@angular/core';

@Injectable()
export class HiraService {

    constructor() { }

    random(list: Array<any>) {
        return list[Math.floor(Math.random() * list.length)];
    }
}