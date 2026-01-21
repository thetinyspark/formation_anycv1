import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { NamePipe } from './name.pipe';
import { PricePipe } from './price.pipe';
import { PlatformPipe } from './platform.pipe';

export type CatalogFilters = {
  selectedPlatform: string;
  searchName: string;
  minPrice: number;
  maxPrice: number;
};

@Pipe({
  name: 'catalogFilter',
  standalone: true
})
export class CatalogPipe implements PipeTransform {

  transform(products: Product[], filters: CatalogFilters): Product[] {
    const namePipe = new NamePipe()
    const pricePipe = new PricePipe(); 
    const platformPipe = new PlatformPipe();

    let results = products;
    results = platformPipe.transform(results, filters.selectedPlatform);
    results = namePipe.transform(results, filters.searchName);
    results = pricePipe.transform(results, filters.minPrice, filters.maxPrice);
    return results;
  }

}
