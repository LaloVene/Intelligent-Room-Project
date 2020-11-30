import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://api.openweathermap.org/data/2.5/";
  apiKey: string = "ef830b862fb9e9e42b0d1fdbe66a174b";

  getCurrentWeather(loc: string) {
    return this.http.get(`${this.apiUrl}/weather?q=${loc}&appid=${this.apiKey}`);
  }
}
