import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter, Inject } from '@angular/core';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: Http) { }
  urlBase = "http://localhost:3030/api/";
  auth = '';
  setAuthToken() {
    this.auth = (this.localStorage.getItem('token')) ? this.localStorage.getItem('token') : '';
  }
  post(url:any, data:any) {
    this.setAuthToken();
    var headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'token': this.auth });
    var options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlBase + url, data, options).pipe(map((res: any) => {
      return res.json();
    }));
  }
  get(url:any) {
    this.setAuthToken();
    var headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'token': this.auth });
    var options = new RequestOptions({ headers: headers });
    return this.http.get(this.urlBase + url, options).pipe(map((res: any) => {
      return res.json();
    }));
  }
}
