import {ProductEntity, ProductId} from "../entities/ProductEntity";
import {Observable} from "rxjs";

export interface ProductRepository {
  create(product: ProductEntity): Observable<ProductId>;
}
