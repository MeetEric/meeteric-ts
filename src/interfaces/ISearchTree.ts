export interface ITreeNode<T> {
  readonly value: number;
  readonly content: T;
}

export interface ISearchTree<T> {
  Insert(value: number, content: T): ITreeNode<T>;
  Find(value: number): ITreeNode<T>;
  FindNearestLower(value: number): ITreeNode<T>;
  FindNearestUpper(value: number): ITreeNode<T>;
}
