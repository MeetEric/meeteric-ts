import 'mocha';
import {assert} from 'chai';
import {GenericIdentifier, Identifiers} from '../core';

describe('Identifier', () => {
  const ida = new GenericIdentifier('a');
  const ida1 = new GenericIdentifier('a');
  const idA = new GenericIdentifier('A');

  it('AreEqualCaseInsensitive should return true when case differs', () => {
    const result = Identifiers.AreEqualCaseInsensitive(ida, idA);
    assert.isTrue(result);
  });

  it('AreEqualCaseInsensitive should return true when case is the same', () => {
    const result = Identifiers.AreEqualCaseInsensitive(ida, ida1);
    assert.isTrue(result);
  });
});
