import {AddProductController} from "../adapters/controllers/add-product.controller";
import {AddProductUseCase} from "../domain/usecases/add-product.use-case";
import {ProductImplemRepository} from "../infra/repositories/product-implem.repository";
import {ProductEntity} from "../domain/entities/ProductEntity";

const newProductId = "Im_A_New_Product_Id_Created";
const newProduct: ProductEntity = {
  id: "123",
  name: "Say_My_Name"
}

function init() {
  const repo = new ProductImplemRepository({
    async post(): Promise<any> {
      return {id: newProductId};
    }
  });
  const useCase = new AddProductUseCase(repo);
  return new AddProductController(useCase);
}

describe("Add Product", () => {
  it('should send a name to api on controller create', (done) => {
    const controller = init();
    controller.create(newProduct).subscribe({
      next: (response) => {
        expect(response).toMatch(newProductId);
        done()
      },
    })
  });
})
