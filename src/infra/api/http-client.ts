export interface HttpClient {
  post<T>(collection: string, data: T): Promise<any>;
}
