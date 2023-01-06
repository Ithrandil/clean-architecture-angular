import {AddProductUseCase} from "../../domain/usecases/add-product.use-case";
import {ProductEntity, ProductId} from "../../domain/entities/ProductEntity";
import {Observable} from "rxjs";

export class AddProductController {
  constructor(private addProductUseCase: AddProductUseCase) {
  }

  create(product: ProductEntity): Observable<ProductId> {
    return this.addProductUseCase.execute(product);
  }
}
