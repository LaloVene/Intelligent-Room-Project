import { Component } from '@angular/core';
import {formatDate} from '@angular/common';

import { FirebaseService } from '../services/firebase.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myDate: any = new Date();

  day: string;
  year: string;
  weekday: string;
  weekdayList: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  weatherIcon: string;

  temperatura: any;
  sensacion: any;
  humedad: any;
  precProb: number = 18;
  
  armed: any = false;
  armedText: string;
  armedIcon: string;
  armedColor: string;
  
  door: any = false;
  doorText: string;
  doorColor: string;
  
  window: any = false;
  windowText: string;
  windowColor: string;
  
  light: any = false;
  lightIntensity: any = 0;
  lightColor: string;

  fan: any = false;
  fanSpeed: any = 0;
  fanColor: string;

  dark: boolean = true;

  constructor(public firebase: FirebaseService) {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.toggleDarkMode();

    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.dark = mediaQuery.matches;
        this.toggleDarkMode();
      }
    );
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }
  
  ngOnInit() {

    this.day = formatDate(this.myDate, 'dd', 'en');
    this.year = formatDate(this.myDate, 'yyyy', 'en');
    this.weekday = this.weekdayList[this.myDate.getDay()];

    this.precProb >= 50 ? this.weatherIcon = "rainy-outline" : this.weatherIcon = "sunny-outline";

    this.getTemp();
    this.getSensa();
    this.getHum();

    this.getArmed();
    this.getLight();
    this.getFan();
    this.getWindow();
    this.getDoor();

  }

  getTemp() {
    this.firebase.getTemp()
      .subscribe(
        res => this.temperatura = res
      );
  }
  getSensa() {
    this.firebase.getSensa()
      .subscribe(
        res => this.sensacion = res
      );
  }
  getHum() {
    this.firebase.getHum()
      .subscribe(
        res => this.humedad = res
      );
  }

  getLight() {
    this.firebase.getLight()
      .subscribe(
        res => res ?
          (this.light = 1, this.lightIntensity = res, this.lightColor="warning") :
          (this.light = 0, this.lightIntensity = 0, this.lightColor="")
      );
  }
  getFan() {
    this.firebase.getFan()
      .subscribe(
        res => res ?
          (this.fan = 1, this.fanSpeed = res, this.fanColor="secondary") :
          (this.fan = 0, this.fanSpeed = 0, this.fanColor="")
      );
  }
  getArmed() {
    this.firebase.getArmed()
      .subscribe(
        res => res ?
          (this.armed = 1, this.armedText = "Armed", this.armedIcon = "lock-closed-outline",  this.armedColor="danger" ) :
          (this.armed = 0, this.armedText = "Disarmed", this.armedIcon="lock-open-outline", this.armedColor="")
        
      );
  }
  getWindow() {
    this.firebase.getWindow()
      .subscribe(
        res => res ?
          (this.window = 1, this.windowText = "Window closed", this.windowColor="success") :
          (this.window = 0, this.windowText = "Window opened", this.windowColor="")
      );
  }
  getDoor() {
    this.firebase.getDoor()
      .subscribe(
        res => res ?
          (this.door = 1, this.doorText = "Door closed", this.doorColor="tertiary") :
          (this.door = 0, this.doorText = "Door opened", this.doorColor="")
      );
  }

  onArmed() {
    this.armed = !this.armed;
    this.firebase.setArmed(this.armed);
  }
  onDoor() {
    this.door = !this.door;
    this.firebase.setDoor(this.door);
  }
  onWindow() {
    this.window = !this.window;
    this.firebase.setWindow(this.window);
  }

  onLight() {
    this.light = !this.light;
    this.firebase.setLight(this.light);
  }
  onFan() {
    this.fan = !this.fan;
    this.firebase.setFan(this.fan);
  }


  onLightChange(e: any) {
    this.lightIntensity = e.detail.value;
    this.lightIntensity ? this.firebase.setLight(this.lightIntensity) : {};
  }
  onFanChange(e: any) {
    this.fanSpeed = e.detail.value;
    this.fanSpeed ? this.firebase.setFan(this.fanSpeed) : {};
  }

}
