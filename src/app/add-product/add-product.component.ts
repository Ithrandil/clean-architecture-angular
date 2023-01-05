import {Component} from '@angular/core';
import {AddProductController} from "../../adapters/controllers/add-product.controller";
import {FormBuilder, Validators} from "@angular/forms";
import {ProductId} from "../../domain/entities/ProductEntity";
import {AddProductControllerFactory} from "../../adapters/controllers/factories/add-product-controller.factory";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [
    {
      provide: AddProductController,
      useFactory: (controllerFactory: AddProductControllerFactory) => controllerFactory.build(),
      deps: [AddProductControllerFactory]
    }
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent {

  productForm = this.formBuilder.group({
    name: ['', Validators.required]
  })

  constructor(private controller: AddProductController, private formBuilder: FormBuilder) {
  }

  create() {
    this.controller.create({
      name: this.productForm.value.name as ProductId, id: "newProduct"
    })
  }
}
