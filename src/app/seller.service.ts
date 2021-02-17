import { Injectable } from '@angular/core';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private app: AppService) { }
  sellersignup(object:any){
    return this.app.post('sellersignup',object);
  }
  sellerlogin(object:any){
    return this.app.post('sellerlogin',object);
  }
  createshop(object:any){
    return this.app.post('createshop',object);
  }
  checkshopexist(object:any){
    return this.app.post('checkshopexist',object);
  }
  upload(object:any){
    return this.app.post('upload',object);
  }
}
