export interface IEnumerator<T> {
  MoveNext(): Promise<boolean>;
  Read(): Promise<T>;
}
