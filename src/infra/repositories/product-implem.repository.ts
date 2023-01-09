import {ProductRepository} from "@domain-repo/product.repository";
import {ProductEntity, ProductId} from "../../domain/entities/ProductEntity";
import {Observable} from "rxjs";
import {ApiClient} from "../api/api-client";

export class ProductImplemRepository implements ProductRepository {
  // TODO: modifier pour faire une entity base de donnée et pas celle du domaine?

  constructor(private apiClient: ApiClient) {
  }

  create(product: ProductEntity): Observable<ProductId> {
    delete product.id;
    return this.apiClient.add<ProductEntity>('products', product);
  }
}
