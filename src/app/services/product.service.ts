import { inject, Injectable } from '@angular/core';
import IProductService from './IProductService';
import { Product, PRODUCTS } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class ProductService implements IProductService{

  private _client:HttpClient = inject(HttpClient);
  constructor() {}

  getProducts(): Observable<Product[]> {
    return this._client.get<Product[]>('assets/catalog.json');
  }
}
