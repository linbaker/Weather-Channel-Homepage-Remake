import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { weatherAPI } from '../environments/api-keys';
import { Weather } from "./models/weather.model";

@Injectable()
export class WeatherDataService {

  constructor(private http: Http) { }

  getWeather() {
      return Weather;
  }

  searchWeatherData(city: string): Observable<any> {
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1a884f65ad6bb67b17e772389e29b35e&units=imperial`)
          .map(response => response.json())
          .catch(error => {
              console.error(error);
              return Observable.throw(error.json())
          });
  }
}
