import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddProductComponent} from './add-product/add-product.component';
import {environment} from "@environment";
import {ReactiveFormsModule} from "@angular/forms";
import {AddProductControllerFactory} from "../adapters/controllers/factories/add-product-controller.factory";
import {AddProductUseCase} from "../domain/usecases/add-product.use-case";
import {ProductRepository} from "@domain-repo/product.repository";
import {ProductImplemRepository} from "../infra/repositories/product-implem.repository";
import {AngularFireModule} from "@angular/fire/compat";
import {AppRoutingModule} from "@app/app-routing.module";
import {ApiClientWSImplem} from "../infra/api/api-client-ws-implem.service";


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // Not compatible with using AngularFireStore in providers => https://github.com/angular/angularfire/issues/2985#issuecomment-941123865
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    ApiClientWSImplem,
    {
      provide: ProductImplemRepository,
      useFactory: (httpClientImplem: ApiClientWSImplem) => new ProductImplemRepository(httpClientImplem),
      deps: [ApiClientWSImplem]
    },
    {
      provide: AddProductUseCase,
      useFactory: (productRepository: ProductRepository) =>
        new AddProductUseCase(productRepository),
      deps: [ProductImplemRepository]
    },
    {
      provide: AddProductControllerFactory,
      useFactory: (addProductUseCase: AddProductUseCase) =>
        new AddProductControllerFactory(addProductUseCase),
      deps: [AddProductUseCase]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
