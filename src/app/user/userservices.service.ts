import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://jetsetgo.in/airports.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }



}
