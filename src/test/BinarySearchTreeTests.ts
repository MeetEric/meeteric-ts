import 'mocha';
import { Collections } from '..';
import { assert } from 'chai';
import Tree = Collections.BalancedBinarySearchTree;

describe('BinarySearchTreeTests', () => {
    function NewTree(): Tree<number> {
        const tree = new Tree<number>();
        tree.Insert(1);
        tree.Insert(5);
        tree.Insert(7);
        return tree;
    }

    it('should return nearest lower bound node', () => {
        const tree = NewTree();
        assert.equal(1, tree.FindNearestLower(4).value);
    });

    it('should return nearest upper bound node', () => {
        const tree = NewTree();
        assert.equal(7, tree.FindNearestUpper(6).value);
    });

    it('should locate exact match when using bound search', () => {
        const tree = NewTree();
        assert.equal(5, tree.FindNearestLower(5).value);
    });

    it('should locate exact match', () => {
        const tree = NewTree();
        assert.equal(5, tree.Find(5).value);
    });

    it('should return null if no element', () => {
        const tree = new Tree<number>();
        assert.isNull(tree.Find(5));
    });

    it('should insert and retrieve 25 elements', () => {
        const tree = new Tree<number>();
        const x = 25;
        for (let i = 0; i < x; i += 1) {
            tree.Insert(i);
        }

        for (let i = 0; i < x; i += 1) {
            assert.equal(i, tree.Find(i)?.value);
        }
    });
});
