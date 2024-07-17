import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private _http: HttpClient) { }

  getList() {
    return this._http.get(`${this.apiUrl}`);
  }


}