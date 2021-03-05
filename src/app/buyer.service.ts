import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private app: AppService) { }
  buyersignup(object: any) {
    return this.app.post('buyersignup', object);
  }
  buyerlogin(object:any){
    return this.app.post('buyerlogin',object);
  }
  getallcategories(object:any){
    return this.app.post('getallcategories',object);
  }
  getallproducts(object:any){
    return this.app.post('getallproducts',object);
  }
  getproduct(object:any){
    return this.app.post('getproduct',object);
  }
}
