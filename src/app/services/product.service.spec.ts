import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { firstValueFrom, Observable, of } from 'rxjs';
import { PRODUCTS } from '../models/product';
import { HttpClient } from '@angular/common/http';

fdescribe('ProductService', () => {
  let service: ProductService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', async () => {
    const results = await firstValueFrom( service.getProducts() );
    expect(results).toEqual(PRODUCTS);
  });

  it('should refresh products and update product signal', async () => {
    await service.refresh();
    expect(service.products()).toEqual(PRODUCTS);
  });

  it('should add a product to the cart and update cart signal', async () => {
    // await service.refresh();
    // expect(service.products()).toEqual(PRODUCTS);
  });
});
