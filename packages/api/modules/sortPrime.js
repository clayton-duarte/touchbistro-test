const sortPrime = (num) => {
  const primeNum1 = [];
  const primeNum2 = [];
  for (var i = 0; i <= num; i++) {
    primeNum2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (primeNum2[i]) {
      primeNum1.push(i);
      for (let j = 1; i * j <= num; j++) {
        primeNum2[i * j] = false;
      }
    }
  }
  return primeNum1;
};

module.exports = sortPrime;