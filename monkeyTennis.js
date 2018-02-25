function ballCollector(detritus) {
  const sack = {
    weight: detritus.filter(ball => ball === 58)
  }
  sack.weight = sack.weight.length * 58;
  return sack;
};
