import {AddProductController} from "../add-product.controller";
import {AddProductUseCase} from "../../../domain/usecases/add-product.use-case";

export class AddProductControllerFactory {
  constructor(private addProductUseCase: AddProductUseCase) {
  }

  build(): AddProductController {
    return new AddProductController(this.addProductUseCase)
  }
}
