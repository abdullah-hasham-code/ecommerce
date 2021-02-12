import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private app: AppService) { }
  buyersignup(object: any) {
    return this.app.post('buyersignup', object);
  }
  buyerlogin(object:any){
    return this.app.post('buyerlogin',object);
  }
}
