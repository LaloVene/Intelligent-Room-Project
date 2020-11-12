import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  light = false;
  fan = false;

  onLight() {
    this.light = !this.light;
  }
  onFan() {
    this.fan = !this.fan;
  }

  constructor() {}

}
