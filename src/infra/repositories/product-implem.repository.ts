import {ProductRepository} from "@domain-repo/product.repository";
import {ProductEntity, ProductId} from "../../domain/entities/ProductEntity";
import {from, map, Observable} from "rxjs";
import {HttpClient} from "../api/http-client";

export class ProductImplemRepository implements ProductRepository {
  // TODO: modifier pour faire une entity base de donnée et pas celle du domaine?

  constructor(private httpClient: HttpClient) {
  }

  create(product: ProductEntity): Observable<ProductId> {
    delete product.id;
    return from(this.httpClient.post<ProductEntity>('products', product)).pipe(
      map(product => product.id)
    );
  }
}
