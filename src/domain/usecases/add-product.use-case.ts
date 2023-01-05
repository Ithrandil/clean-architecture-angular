import {UseCase} from "../../base/use-case";
import {ProductEntity, ProductId} from "../entities/ProductEntity";
import {ProductRepository} from "@domain-repo/product.repository";
import {Observable} from "rxjs";

export class AddProductUseCase implements UseCase<ProductEntity, ProductId> {
  constructor(private productRepository: ProductRepository) {
  }

  execute(product: ProductEntity): Observable<ProductId> {
    return this.productRepository.create(product);
  }
}
