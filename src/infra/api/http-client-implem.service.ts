import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {Injectable} from "@angular/core";
import {HttpClient} from "./http-client";

@Injectable()
export class HttpClientImplem implements  HttpClient {
  constructor(private firestore: AngularFirestore) {
  }

  post<T>(collection: string, data: T): Promise<DocumentReference> {
    return this.firestore.collection(collection).add(data);
  }
}
