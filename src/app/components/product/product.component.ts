import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product';
import { NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  public currentProduct:Product | null = null;

  @Input()
  public buyable:boolean = false;

  @Input()
  public removable:boolean = false;
  
  private _productService:ProductService = inject(ProductService);


  public addToCart( product:Product){
    this._productService.addProductToCart(product);
  }

  public removeFromCart(product:Product){
    this._productService.removeProductFromCart(product);
  }
}
