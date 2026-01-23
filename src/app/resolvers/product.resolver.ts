import { inject, Signal } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

export const productResolver: ResolveFn<Signal<Product[]>> = (route, state) => {
  const service = inject(ProductService);
  return service.products;
};
