import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  iterms;
  constructor(private cartService: CartService) {
    this.iterms = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
