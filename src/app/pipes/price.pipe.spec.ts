import { PRODUCTS } from '../models/product';
import { PricePipe } from './price.pipe';

describe('PricePipe Test Suite', () => {

  fit(
    'create an instance', 
    () => {
      const pipe = new PricePipe();
      expect(pipe).toBeTruthy();
    }
  );

  fit(
    'price should be between a minimum and a maximum', 
    () => {
      // given
      const pipe = new PricePipe();
      const products = PRODUCTS;
      const min = 8 + Math.round( Math.random() * 10 );
      const max = min + Math.round( Math.random() * 100 );

      // then 
      const results = pipe.transform(products, min, max);

      // then
      results.forEach( 
        (product)=>{
          expect(product.price).toBeGreaterThanOrEqual(min);
          expect(product.price).toBeLessThanOrEqual(max);
        }
      );
    }
  );



});
