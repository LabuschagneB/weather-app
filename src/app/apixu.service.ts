import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=022589c96b75409daaa85825191406&q=' + location
    );
  }
}
