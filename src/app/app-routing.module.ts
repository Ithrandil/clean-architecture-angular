import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AppComponent} from "@app/app.component";
import {AddProductComponent} from "@app/add-product/add-product.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'create', component: AddProductComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
