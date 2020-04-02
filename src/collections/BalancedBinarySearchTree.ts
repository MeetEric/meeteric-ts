import { ITreeNode, ISearchTree } from "../interfaces";

class Node<T> implements ITreeNode<T> {
    constructor(value: number, content: T) {
        this.content = content;
        this.value = value;
        this.level = 1;
    }

    public parent: Node<T>;
    public left: Node<T>;
    public right: Node<T>;
    public level: number;

    public readonly value: number;
    public readonly content: T;

    public IsLeaf(): boolean {
        return this.left === null && this.right == null;
    }
}

enum SearchType {
    Exact,
    Upper,
    Lower
}

export class BalancedBinarySearchTree<T> implements ISearchTree<T> {
    private root: Node<T>;

    public Insert(value: number, content?: T): ITreeNode<T> {
        if (this.root == null) {
            this.root = new Node<T>(value, content);
        } else {
            const node = this.InsertNode(this.root, value, content);
            if (node != null) {
                this.root = node;
            }
        }

        return this.root;
    }

    public Find(value: number): ITreeNode<T> {
        return this.FindNode(value, this.root, SearchType.Exact);
    }

    public FindNearestLower(value: number): ITreeNode<T> {
        return this.FindNode(value, this.root, SearchType.Lower);
    }

    public FindNearestUpper(value: number): ITreeNode<T> {
        return this.FindNode(value, this.root, SearchType.Upper);
    }

    private InsertNode(node: Node<T>, value: number, content: T): Node<T> {
        if (value < node.value) {
            node.left = this.AddNode(node.left, value, content);
        } else if (value > node.value) {
            node.right = this.AddNode(node.right, value, content);
        } else {
            node = null;
        }

        if (node != null) {
            node = this.BalanceRight(node);
            node = this.BalanceLeft(node);
        }

        return node;
    }

    private AddNode(node: Node<T>, value: number, content: T): Node<T> {
        let newNode: Node<T> = null;

        if (node == null) {
            newNode = new Node(value, content);
        }
        else {
            newNode = this.InsertNode(node, value, content);
        }

        return newNode ?? node;
    }

    private BalanceRight(node: Node<T>): Node<T> {
        if (node.left != null && node.level === node.left.level) {
            const temp = node.left;
            node.left = temp.right;
            temp.right = node;
            node = temp;
        }

        return node;
    }

    private BalanceLeft(node: Node<T>): Node<T> {
        if (node.right != null && node.right.level === node.level) {
            // rotate left
            const temp = node.right;
            node.right = temp.left;
            temp.left = node;
            node = temp;
            node.level = node.level + 1;
        }

        return node;
    }

    private FindNode(value: number, parent: Node<T>, match: SearchType): Node<T> {
        let result: Node<T> = null;

        if (parent != null) {
            if (value === parent.value) {
                result = parent;
            } else {
                if (value < parent.value) {
                    result = this.FindNode(value, parent.left, match);
                }
                else {
                    result = this.FindNode(value, parent.right, match);
                }
            }

            if (result == null) {
                if (match === SearchType.Lower && parent.value < value) {
                    result = parent;
                } else if (match === SearchType.Upper && parent.value > value) {
                    result = parent;
                }
            }
        }

        return result;
    }
}
