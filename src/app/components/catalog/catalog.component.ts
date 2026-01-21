import { Component } from '@angular/core';
import { Product, PRODUCTS } from '../../models/product';
import { NgFor } from '@angular/common';
import { PlatformPipe } from '../../pipes/platform.pipe';
import { FormsModule } from '@angular/forms';
import { CatalogPipe } from '../../pipes/catalog.pipe';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, PlatformPipe, FormsModule, CatalogPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  public products:Product[] = [];
  public allPlatforms:string[] = [];
  public selectedPlatform:string = "All";
  public searchName:string = "";
  public minPrice:number = 0;
  public maxPrice:number = 1000;

  ngOnInit(): void {
    this.products = PRODUCTS;
    this.allPlatforms = Array.from( new Set(this.products.map(product => product.platform)) );
    this.allPlatforms.unshift("All");

    this.selectedPlatform = this.allPlatforms[0];
  }

  getCatalogFilters() {
    return {
      selectedPlatform: this.selectedPlatform,
      searchName: this.searchName,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    };
  }
}
