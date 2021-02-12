import { Component, OnInit } from '@angular/core';
import {ToastService} from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {

  constructor(private toast: ToastService) { }

  ngOnInit(): void {
  }

}
