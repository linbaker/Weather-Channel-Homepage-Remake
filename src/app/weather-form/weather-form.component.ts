import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})

export class WeatherFormComponent implements OnInit {

    private search = new Subject<string>();
    data: any = {};

    constructor(private weatherService:WeatherService) {
    }

    onSubmit() {
        const weather = new Weather(this.data.name, this.data.weather[0].description, this.data.main.temp);
        this.weatherService.addWeather(weather);

    }

    onSearchLocation(cityName:string) {
        this.searchStream
            .next(cityName);
    }

    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input:string) => this._weatherService.searchWeatherData(input))
            .subscribe(
              data => this.data = data
            );
    }
}
