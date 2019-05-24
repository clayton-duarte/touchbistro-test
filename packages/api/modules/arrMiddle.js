const arrMidleItens = (arr) => {
  const { length } = arr;
  const start = Math.ceil(length / 2);
  const range = (length + 1) % 2;
  return arr.slice(start - 1, start + range);
};

module.exports = arrMidleItens;