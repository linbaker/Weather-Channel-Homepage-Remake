import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherDataService {

  constructor(private http: Http) { }

  searchWeatherData(cityName: string, weatherAPIKey: string): Observable<any> {
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${weatherAPIKey}`)
          .map(response => response.json())
          .catch(error => {
              console.error(error);
              return Observable.throw(error.json())
          });
  }
}
