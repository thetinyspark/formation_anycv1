import { inject, Signal } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

export const cartResolver: ResolveFn<Signal<Product[]>> = (route, state) => {
  const service = inject(ProductService); 
  return service.cart;
};
