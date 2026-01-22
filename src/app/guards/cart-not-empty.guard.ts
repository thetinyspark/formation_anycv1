import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ProductService } from '../services/product.service';

export const cartNotEmptyGuard: CanActivateFn = (route, state) => {
  const productService = inject(ProductService);
  return productService.cart().length > 0;
};
