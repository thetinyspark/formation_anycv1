import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  private _productService:ProductService = inject(ProductService);
  public cart = this._productService.cart;

  removeFromCart(product:Product){
    this._productService.removeProductFromCart(product);
  }
}
