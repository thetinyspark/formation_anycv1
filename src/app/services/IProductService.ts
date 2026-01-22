import { Observable } from "rxjs";
import { Product } from "../models/product";

export default interface IProductService {
  // Define methods and properties for the product service here
  getProducts(): Observable<Product[]>;
  getAllPlatforms(): Observable<string[]>;
}