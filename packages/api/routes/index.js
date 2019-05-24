const express = require('express');
const router = express.Router();

const arrMidleItens = require('../modules/arrMiddle');
const sortPrime = require('../modules/sortPrime');

router.get('/', function (req, res) {
  res.send('online');
});

router.post('/', function (req, res) {
  const { num } = req.body;
  const primeNumber = sortPrime(num);
  const middle = arrMidleItens(primeNumber);
  res.send(middle);
});

module.exports = router;
