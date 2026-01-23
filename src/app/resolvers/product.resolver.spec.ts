import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productResolver } from './product.resolver';

import { Signal } from '@angular/core';
import { Product } from '../models/product';

describe('productResolver', () => {
  const executeResolver: ResolveFn<Promise<Signal<Product[]>>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
