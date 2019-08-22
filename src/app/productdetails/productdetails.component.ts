import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product;
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  constructor(
    private rout: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
