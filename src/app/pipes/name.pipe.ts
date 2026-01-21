import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NamePipe implements PipeTransform {

  transform(products:Product[], searchName: string): Product[] {
    if( searchName == "" )
      return products;

    return products.filter(
      (currentProduct:Product)=>{

        if( currentProduct.name.toLowerCase().includes( searchName.toLowerCase() ) ) {
          return true;
        }
        
        return false;
      }
    );
  }

}
