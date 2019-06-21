import {Component, OnInit} from "@angular/core";
import {WeatherObjectComponent} from "../weather-object/weather-object.component";
import { Weather } from "./models/weather.model";
import {WeatherService} from "../weather-service/weather-service.component";

@Component({
  selector: 'app-weather-list',
  templateUrl: '../weather-list.component.html',
  styleUrls: ['../weather-list.component.css'],
  directives: [WeatherObjectComponent]
})
  export class WeatherListComponent implements OnInit {
    weather: Weather[];

    constructor(private weatherService: WeatherService) {}

    ngOnInit():any {
      this.weather = this.weatherService.getWeather();
    }
}
