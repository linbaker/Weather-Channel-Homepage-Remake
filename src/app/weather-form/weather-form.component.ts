import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Subject} from "rxjs/Subject";

import {WeatherDataService } from '../weather-data.service';
import {WeatherObjectComponent} from "../weather-object/weather-object.component";
import { Weather } from "../models/weather.model";

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css'],
  providers: [ WeatherDataService ]
})

export class WeatherFormComponent implements OnInit {

    private searchStream = new Subject <string> ();
    data: any = {};

    constructor(private weatherDataService:WeatherDataService) {
    }

    onSubmit() {
        const weather = new Weather(this.data.name, this.data.weather[0].description, this.data.main.temp);
        this.weatherDataService.addWeather(weather);

    }

    onSearchLocation(city:string) {
        this.searchStream
            .next(city);
    }

    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input: string) => this.weatherDataService.searchWeatherData(input))
            .subscribe(
              data => this.data = data
            );
    }
}
