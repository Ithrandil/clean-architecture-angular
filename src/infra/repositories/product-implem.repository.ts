import {ProductRepository} from "@domain-repo/product.repository";
import {ProductEntity, ProductId} from "../../domain/entities/ProductEntity";
import {from, map, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

export class ProductImplemRepository implements ProductRepository {
  // TODO: modifier pour faire une entity base de donnée et pas celle du domaine?
  // TODO: Rajouter une couche d'abstraction pour firestore
  private productsCollection: AngularFirestoreCollection<ProductEntity>;

  constructor(private firestore: AngularFirestore) {
    this.productsCollection = firestore.collection<ProductEntity>('products')
  }

  create(product: ProductEntity): Observable<ProductId> {
    return from(this.productsCollection.add(product)).pipe(
      map(product => product.id)
    );
  }

}
