import { Component, effect, inject, Signal } from '@angular/core';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { PlatformPipe } from '../../pipes/platform.pipe';
import { FormsModule } from '@angular/forms';
import { CatalogPipe } from '../../pipes/catalog.pipe';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, PlatformPipe, FormsModule, CatalogPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  private _catalogService: ProductService = inject(ProductService);
  private _route:ActivatedRoute = inject(ActivatedRoute);
  public products:Signal<Product[]> = this._route.snapshot.data['products'];
  public allPlatforms = this._catalogService.allPlatforms;
  public selectedPlatform:string = "All";
  public searchName:string = "";
  public minPrice:number = 0;
  public maxPrice:number = 1000;

  public addToCart( product:Product){
    console.log(product);
    // this._catalogService.addProductToCart(product);
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
