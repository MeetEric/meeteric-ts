import 'mocha';
import { HexString } from './..';
import { assert } from 'chai';

describe('HexStringTests', () => {
    it('should return value 0x01 for an input 0x01', () => {
        const hex = new HexString("0x01");
        assert.equal(hex.AsHex(), "0x01");
    });

    it('should return value 0xff for an input FF', () => {
        const hex = new HexString("FF");
        assert.equal(hex.AsHex(), "0xff");
    });

    it('should return value 0xffab for an input FF prefixed with AB', () => {
        const hex = new HexString("FF").Prefix(new HexString('AB'));
        assert.equal(hex.AsHex(), "0xffab");
    });

    it('should create and validate empty value', () => {
        const hex = HexString.Empty();
        assert.isTrue(hex.IsEmpty());
    });

    it('should return empty for a value of 0x0', () => {
        const hex = new HexString("0x0");
        assert.isTrue(hex.IsEmpty());
    });

    it('should return empty for a value of 0', () => {
        const hex = new HexString("0");
        assert.isTrue(hex.IsEmpty());
    });

    it('should not return empty for a value of 1', () => {
        const hex = new HexString("1");
        assert.isFalse(hex.IsEmpty());
    });
});
