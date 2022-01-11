import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=6107ff597018efc6d164e52d33f7543d&query=' + location
    );
  }
}
