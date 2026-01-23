import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { firstValueFrom, Observable, of } from 'rxjs';
import { PRODUCTS } from '../models/product';
import { HttpClient } from '@angular/common/http';

fdescribe('ProductService', () => {
  let service: ProductService;
  let client:HttpClient;

  class FakeHttpClient{
    get<T>(url:string):Observable<any>{
      return of(PRODUCTS);
    }
  }

  const http = new FakeHttpClient();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: http }
      ]
    });
    service = TestBed.inject(ProductService);
    client = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', async () => {
    const results = await firstValueFrom( service.getProducts() );
    expect(results).toEqual(PRODUCTS);
  });

  it('should refresh products and update product signal', async () => {
    service.reset();
    // ici on court-circuit l'appel à la méthode "get" du client
    // const spy = spyOn(client, "get").and.returnValue( of([]));
    const spy = spyOn(client, "get").and.returnValue( of(PRODUCTS));

    await service.refresh();
    expect(service.products()).toEqual(PRODUCTS);

    // permet de vérifier combien de fois la méthode espionnée a été appellée
    expect(spy).toHaveBeenCalledTimes(50);
  });

  it('should add a product to the cart and update cart signal', async () => {
    service.reset();
    service.addProductToCart(PRODUCTS[0]);
    service.addProductToCart(PRODUCTS[1]);
    service.addProductToCart(PRODUCTS[2]);
    expect(service.cart()).toEqual([PRODUCTS[0],PRODUCTS[1],PRODUCTS[2]]);
  });

  it('should remove products from to the cart and update cart signal', async () => {
    service.reset();

    
    service.addProductToCart(PRODUCTS[0]);
    service.addProductToCart(PRODUCTS[1]);
    service.addProductToCart(PRODUCTS[2]);

    service.removeProductFromCart(PRODUCTS[1]);
    expect(service.cart()).toEqual([PRODUCTS[0],PRODUCTS[2]]);
  });
});
