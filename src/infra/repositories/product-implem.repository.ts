import {ProductRepository} from "@domain-repo/product.repository";
import {ProductEntity, ProductId} from "../../domain/entities/ProductEntity";
import {map, Observable} from "rxjs";
import {ApiClient} from "../api/api-client";

export class ProductImplemRepository implements ProductRepository {
  // TODO: modifier pour faire une entity base de donnée et pas celle du domaine?

  constructor(private httpClient: ApiClient) {
  }

  create(product: ProductEntity): Observable<ProductId> {
    delete product.id;
    return this.httpClient.add<ProductEntity>('products', product).pipe(
      map(product => product.id)
    );
  }
}
