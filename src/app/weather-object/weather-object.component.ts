import { Component, Input } from '@angular/core';
import { Weather } from "./models/weather.model";

@Component({
  selector: 'app-weather-object',
  templateUrl: '../weather-object.component.html',
  styleUrls: ['../weather-object.component.css']
})
export class WeatherObjectComponent {
    @Input('item') weather: Weather;
}
