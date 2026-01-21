import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'platformFilter',
  standalone: true
})
export class PlatformPipe implements PipeTransform {

  transform(products:Product[], selectedPlatform: string): Product[] {
    if( selectedPlatform === "All" || selectedPlatform == "" ) 
      return products

    const results = [];
    for( let i = 0; i < products.length; i++ ) {
      if( products[i].platform === selectedPlatform ) {
        results.push(products[i]);
      }
    }
    return results;
  }

}
