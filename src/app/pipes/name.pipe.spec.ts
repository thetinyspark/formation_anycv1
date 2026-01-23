import { PRODUCTS } from '../models/product';
import { NamePipe } from './name.pipe';

fdescribe('NamePipe', () => {
  it('create an instance', () => {
    const pipe = new NamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should not have resulting products', () => {
    const pipe = new NamePipe();
    const products = PRODUCTS; 

    const results = pipe.transform(products, "---"); 

    expect(results.length).toEqual(0);
  });
  
  it('should have products[0] at least', () => {
    const pipe = new NamePipe();
    const products = PRODUCTS; 

    const results = pipe.transform(products, products[0].name.substring(0,2)); 

    expect(results).toContain(products[0]);
  });
});
