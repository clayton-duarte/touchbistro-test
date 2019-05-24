const sortPrime = require('./sortPrime');
const assert = require('assert');

describe('Should return a array with all prime number less then a given number', () => {
  it('when the number is 50', () => {
    assert.deepEqual(sortPrime(50), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });
  it('when the number is 45', () => {
    assert.deepEqual(sortPrime(45), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
  })
});
