import { computed, effect, inject, Injectable, signal } from '@angular/core';
import IProductService from './IProductService';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { delay, firstValueFrom, Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { RegisterClass } from '../decorators/RegisterClass';
import { LogMethodCall } from '../decorators/LogMethodCall';

@Injectable({
  providedIn: 'root', 
})
@RegisterClass({name:"productservice"})
export class ProductService implements IProductService{

  private _products = signal<Product[]>([]);
  private _cart = signal<Product[]>([]);
  public products = this._products.asReadonly();
  public cart = this._cart.asReadonly();

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
  private _loading:LoadingService = inject(LoadingService);

  constructor() {
    // this.autoRefresh();
  }

  public reset(){
    this._products.set([]);
    this._cart.set([]);
  }
  
  public async refresh(){
    this._loading.loadDuring(1000);
    const products = await firstValueFrom( this.getProducts().pipe( delay(1000)) );
    this._products.set(products);
  }

  private async autoRefresh(){
    await this.refresh();
    setTimeout( 
      ()=>this.autoRefresh(), 
      5000
    );
  }

  getProducts(): Observable<Product[]> {
    return this._client.get<Product[]>('assets/catalog.json?rand='+Math.round(Math.random()*1000));
  }

  @LogMethodCall
  public addProductToCart( product:Product){
    const cart = this._cart();
    cart.push(product);
    this._cart.set(cart);
  }

  public removeProductFromCart( product:Product){
    const cart = this._cart();
    const pos = cart.indexOf(product);
    cart.splice(pos, 1);
    this._cart.set(cart);
  }
}
