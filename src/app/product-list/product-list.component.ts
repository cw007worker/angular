import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;


  share() {
    window.alert('The product has been shared')
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale")
  }
  constructor() { }

  ngOnInit() {
  }

}
