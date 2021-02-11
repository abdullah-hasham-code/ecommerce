import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../api.service';

@Component({
  selector: 'app-buyersignup',
  templateUrl: './buyersignup.component.html',
  styleUrls: ['./buyersignup.component.scss']
})
export class BuyersignupComponent implements OnInit {

  constructor(private api:ApiService) { }
	signupData:any={};
  ngOnInit(): void {
  }
	buyersignup(){
		this.api.buyersignup(this.signupData).subscribe(res=>{
      
		},(err=>{
      console.log(err);
    }))
	}
}
