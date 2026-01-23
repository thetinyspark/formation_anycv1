import { Component, inject, Signal } from '@angular/core';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { PlatformPipe } from '../../pipes/platform.pipe';
import { FormsModule } from '@angular/forms';
import { CatalogPipe } from '../../pipes/catalog.pipe';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, PlatformPipe, FormsModule, CatalogPipe, ProductComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  private _route:ActivatedRoute = inject(ActivatedRoute);
  public products:Signal<Product[]> = this._route.snapshot.data['products'];
  public allPlatforms = this._route.snapshot.data['platforms'];
  public selectedPlatform:string = "All";
  public searchName:string = "";
  public minPrice:number = 0;
  public maxPrice:number = 1000;

  getCatalogFilters() {
    return {
      selectedPlatform: this.selectedPlatform,
      searchName: this.searchName,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    };
  }

}
