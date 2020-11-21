import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {}

  getArmed(){
    return this.db.object('armed').valueChanges(); 
  }
  setArmed(state){
    this.db.database.ref('armed').set(state);
  }

  getLight(){
    return this.db.object('luz').valueChanges(); 
  }
  setLight(state){
    this.db.database.ref('luz').set(state);
  }

  getFan(){
    return this.db.object('ventilador').valueChanges(); 
  }
  setFan(state){
    this.db.database.ref('ventilador').set(state);
  }

  getWindow(){
    return this.db.object('ventana').valueChanges(); 
  }
  setWindow(state){
    this.db.database.ref('ventana').set(state);
  }

  getDoor(){
    return this.db.object('puerta').valueChanges(); 
  }
  setDoor(state){
    this.db.database.ref('puerta').set(state);
  }

  getTemp() {
    return this.db.object('temperatura').valueChanges(); 
  }
  getHum() {
    return this.db.object('humedad').valueChanges(); 
  }
  getSensa() {
    return this.db.object('sensacion').valueChanges(); 
  }
}
