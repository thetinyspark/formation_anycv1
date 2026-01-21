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
  public allPlatforms:string[] = [];

  ngOnInit(): void {
    this.products = PRODUCTS;
    this.allPlatforms = Array.from( new Set(this.products.map(product => product.platform)) );
    this.allPlatforms.unshift("All");
  }
}
