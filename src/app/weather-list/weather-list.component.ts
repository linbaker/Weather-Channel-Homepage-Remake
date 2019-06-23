import {Component, OnInit} from "@angular/core";
import {WeatherDataService } from '../weather-data.service';
import { Weather } from "../models/weather.model";

@Component({
  selector: 'app-weather-list',
  templateUrl: '../weather-list.component.html',
  styleUrls: ['../weather-list.component.css'],
  providers: []
})
  export class WeatherListComponent implements OnInit {
    weather: Weather[];

    constructor() {}

    ngOnInit():any {

    }
}
