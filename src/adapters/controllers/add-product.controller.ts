import {AddProductUseCase} from "../../domain/usecases/add-product.use-case";
import {ProductEntity} from "../../domain/entities/ProductEntity";

export class AddProductController {
  constructor(private addProductUseCase: AddProductUseCase) {
  }

  create(product: ProductEntity) {
    this.addProductUseCase.execute(product)
  }
}
