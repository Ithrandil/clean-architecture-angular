import {Observable} from "rxjs";

export interface ApiClient {
  add<T>(collection: string, data: T): Observable<any>;
}
