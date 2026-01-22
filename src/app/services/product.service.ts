import { inject, Injectable } from '@angular/core';
import IProductService from './IProductService';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class ProductService implements IProductService{

  private _client:HttpClient = inject(HttpClient);
  constructor() {}

  getProducts(): Observable<Product[]> {
    return this._client.get<Product[]>('assets/catalog.json');
  }

  getAllPlatforms(): Observable<string[]> {
    return this.getProducts().pipe(
      map(
        (products:Product[]) => {
          const allPlatforms:string[] = Array.from( new Set(products.map(product => product.platform)) );
          allPlatforms.unshift("All");
          return allPlatforms;
        }
      )
    );
  }
}
