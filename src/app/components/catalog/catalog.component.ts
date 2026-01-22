import { Component, computed, effect, inject, signal } from '@angular/core';
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



  public myPriceTTC = computed( 
    ()=>{
      return this.myPriceHT() + ( this.myPriceHT() * this.myTVA())/100
    }
  );
  public myPriceHT = signal<number>(100);
  public myTVA = signal<number>(0);
  private _catalogService: ProductService = inject(ProductService);

  constructor(){
    // effect(
    //   ()=>{
    //     const priceHT = this.myPriceHT();
    //     const tva = this.myTVA();
    //     // this.myPriceTTC = ( priceHT + (priceHT * tva)/100);
    //   }
    // )
  }

  ngOnInit(): void {
    this._catalogService.getProducts().subscribe(products => this.products = products);
    this._catalogService.getAllPlatforms().subscribe(
      (platforms) => {
        this.allPlatforms = platforms
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

  public incTVA():void{
    this.myTVA.set(this.myTVA()+1)
  }
  public decTVA():void{
    this.myTVA.set(this.myTVA()-1)
  }
  public incHT():void{
    this.myPriceHT.set(this.myPriceHT()+10);
  }
  public decHT():void{
    this.myPriceHT.set(this.myPriceHT()-10);
  }
}
