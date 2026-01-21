import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'priceFilter',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(products: Product[], minPrice: number, maxPrice: number): Product[] {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }

}
