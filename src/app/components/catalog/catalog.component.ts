import { Component } from '@angular/core';
import { Product, PRODUCTS } from '../../models/product';
import { NgFor } from '@angular/common';
import { PlatformPipe } from '../../pipes/platform.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor,PlatformPipe,FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  public products:Product[] = [];
  public allPlatforms:string[] = [];
  public selectedPlatform:string = "All";

  ngOnInit(): void {
    this.products = PRODUCTS;
    this.allPlatforms = Array.from( new Set(this.products.map(product => product.platform)) );
    this.allPlatforms.unshift("All");

    this.selectedPlatform = this.allPlatforms[0];
  }
}
