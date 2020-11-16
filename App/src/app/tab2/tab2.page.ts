import { Component } from '@angular/core';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  myDate: any = new Date();
  constructor() {}

  weatherIcon: string;

  precProb: number = 18;
  
  armed: boolean = false;
  armedText: string;
  armedIcon: string;
  armedColor: string;
  
  door: boolean = false;
  doorText: string;
  doorColor: string;
  
  window: boolean = false;
  windowText: string;
  windowColor: string;
  
  light: boolean = false;
  lightIntensity: number = 0;
  lightColor: string;

  fan: boolean = false;
  fanSpeed: number = 0;
  fanColor: string;
  
  ngOnInit() {
    console.log(formatDate(new Date(), 'dd', 'en'))
    this.precProb >= 50 ? this.weatherIcon = "rainy-outline" : this.weatherIcon = "sunny-outline" ;

    this.armed ?
      (this.armedText = "Armed", this.armedIcon = "lock-closed-outline",  this.armedColor="danger" ) :
      (this.armedText = "Disarmed", this.armedIcon="lock-open-outline", this.armedColor="");

    this.door ? (this.doorText = "Door closed", this.doorColor="tertiary") : (this.doorText = "Door opened", this.doorColor="");
    this.window ? (this.windowText = "Window closed", this.windowColor="success") : (this.windowText = "Window opened", this.windowColor="");
    this.light ? (this.lightIntensity = 255, this.lightColor="warning") : (this.lightIntensity = 0, this.lightColor="");
  }

  onArmed() {
    this.armed = !this.armed;
    this.armed ?
      (this.armedText = "Armed", this.armedIcon = "lock-closed-outline", this.armedColor="danger" ) :
      (this.armedText = "Disarmed", this.armedIcon="lock-open-outline", this.armedColor="");
  }
  onDoor() {
    this.door = !this.door;
    this.door ? (this.doorText = "Door closed", this.doorColor="tertiary") : (this.doorText = "Door opened", this.doorColor="");
  }
  onWindow() {
    this.window = !this.window;
    this.window ? (this.windowText = "Window closed", this.windowColor="success") : (this.windowText = "Window opened", this.windowColor="");
  }

  onLight() {
    this.light = !this.light;
    this.light ? (this.lightIntensity = 255, this.lightColor="warning") : (this.lightIntensity = 0, this.lightColor="");
  }
  onFan() {
    this.fan = !this.fan;
    this.fan ? (this.fanSpeed = 255, this.fanColor="secondary") : (this.fanSpeed = 0, this.fanColor="");
  }


  onLightChange(e: any) {
    this.lightIntensity = e.detail.value;
    console.log("Light: ", this.lightIntensity);
  }
  onFanChange(e: any) {
    this.fanSpeed = e.detail.value;
    console.log("Fan:   ", this.fanSpeed);
  }

}
