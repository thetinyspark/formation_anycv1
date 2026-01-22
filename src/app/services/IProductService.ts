import { Observable } from "rxjs";
import { Product } from "../models/product";

export default interface IProductService {
  getProducts(): Observable<Product[]>;
}