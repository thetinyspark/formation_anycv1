import { computed, effect, inject, Injectable, signal } from '@angular/core';
import IProductService from './IProductService';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class ProductService implements IProductService{

  private _products = signal<Product[]>([]);
  public products = this._products.asReadonly();

  // les signaux déclenchent un update de la vue (HTML)
  // calcule un résultat et l'assigne à allPlatforms lorsque un signal est MAJ
  public allPlatforms = computed( 
    ()=>{
      const platforms = Array.from( new Set( this.products().map( current => current.platform ) ) );
      platforms.unshift("All"); 
      return platforms;
    }
  ); 

  private _client:HttpClient = inject(HttpClient);

  constructor() {
    effect( 
      ()=>{
        // éventuelles actions à lancer quand un signal est MAJ
      }
    )
    
    this.refresh();
  }

  async refresh(){
    const products = await firstValueFrom( this.getProducts() );
    this._products.set(products);
    setTimeout( 
      ()=>this.refresh(), 
      5000
    );
  }

  getProducts(): Observable<Product[]> {
    return this._client.get<Product[]>('assets/catalog.json?rand='+Math.round(Math.random()*1000));
  }
}
