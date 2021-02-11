import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../api.service';

@Component({
	selector: 'app-buyerlogin',
	templateUrl: './buyerlogin.component.html',
	styleUrls: ['./buyerlogin.component.scss']
})
export class BuyerloginComponent implements OnInit {

	constructor(private api:ApiService) { }
	ngOnInit(): void {
	}
}
