import { Component, inject, Signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { NgForOf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  private _productService:ProductService = inject(ProductService);
  private _route:ActivatedRoute = inject(ActivatedRoute); 
  public cart:Signal<Product[]> = this._route.snapshot.data['cart'];

  removeFromCart(product:Product){
    this._productService.removeProductFromCart(product);
  }
}
