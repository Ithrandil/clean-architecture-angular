import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Injectable} from "@angular/core";
import {ApiClient} from "./api-client";
import {from, map, Observable} from "rxjs";

@Injectable()
export class ApiClientWSImplem implements ApiClient {
  constructor(private firestore: AngularFirestore) {
  }

  add<T>(collection: string, data: T): Observable<string> {
    return from(this.firestore.collection(collection).add(data)).pipe(
      map(data => data.id)
    );
  }
}
