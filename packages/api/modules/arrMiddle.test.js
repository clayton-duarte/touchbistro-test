const arrMidleItens = require('./arrMiddle');
const assert = require('assert');

describe('Should find the middle item(s) from a array', () => {
  it('when the array length is even', () => {
    const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
    assert.deepEqual(arrMidleItens(arr), [17, 19]);
  });
  it('when the array length is odd', () => {
    const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    assert.deepEqual(arrMidleItens(arr), [19]);
  })
});
