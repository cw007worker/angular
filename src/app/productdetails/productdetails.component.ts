import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  produc;
  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(params => {
      this.produc = products[+params.get('productId')];
    });
  }

}
