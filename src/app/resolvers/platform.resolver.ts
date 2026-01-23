import { inject, Signal } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';

export const platformResolver: ResolveFn<Signal<string[]>> = (route, state) => {
  const service = inject(ProductService); 
  return service.allPlatforms;
};
