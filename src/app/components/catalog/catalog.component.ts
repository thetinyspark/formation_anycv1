import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { PlatformPipe } from '../../pipes/platform.pipe';
import { FormsModule } from '@angular/forms';
import { CatalogPipe } from '../../pipes/catalog.pipe';
import { ProductService } from '../../services/product.service';

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
  private _catalogService: ProductService = inject(ProductService);

  ngOnInit(): void {
    this._catalogService.getProducts().subscribe( 
      
      (products:Product[]) => {
        this.products = products;
        this.allPlatforms = Array.from( new Set(this.products.map(product => product.platform)) );
        this.allPlatforms.unshift("All");
        this.selectedPlatform = this.allPlatforms[0];
      }
    );
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
