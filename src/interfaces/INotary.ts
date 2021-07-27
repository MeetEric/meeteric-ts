export interface INotaryResult<T> {
  readonly signature: string;
  readonly payload: T;
}

export interface INotary {
  GetSignature<T>(content: T): Promise<INotaryResult<T>>;
}
