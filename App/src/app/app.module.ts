import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';


export const firebaseConfig = {
  apiKey: "AIzaSyCf3_k_yq2rj_xGZ_TCGST-BhlB_WNNAm4",
    authDomain: "room-app-dc3af.firebaseapp.com",
    databaseURL: "https://room-app-dc3af.firebaseio.com",
    projectId: "room-app-dc3af",
    storageBucket: "room-app-dc3af.appspot.com",
    messagingSenderId: "324369180047",
    appId: "1:324369180047:web:e305bfa2ce3966ddd7d7fa",
    measurementId: "G-EWBP5L4ZRJ"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
