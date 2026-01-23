import { Component, inject, Signal } from '@angular/core';
import { Product } from '../../models/product';
import { NgForOf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgForOf, ProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private _route:ActivatedRoute = inject(ActivatedRoute); 
  public cart:Signal<Product[]> = this._route.snapshot.data['cart'];
}
