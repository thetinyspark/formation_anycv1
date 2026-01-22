import { Component, effect, inject } from '@angular/core';
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
  private _catalogService: ProductService = inject(ProductService);
  public products = this._catalogService.products;
  public allPlatforms = this._catalogService.allPlatforms;
  public selectedPlatform:string = "All";
  public searchName:string = "";
  public minPrice:number = 0;
  public maxPrice:number = 1000;
  public str:string = "";

  constructor(){
    effect(
      ()=>{
        this.str = "MAJ "+this.allPlatforms().length+" platforms at "+new Date().toLocaleTimeString();
      }
    )
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
