import { Component } from '@angular/core';
import { Product, PRODUCTS } from '../../models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  public products:Product[] = [];

  ngOnInit(): void {
    this.products = PRODUCTS;
  }
}
