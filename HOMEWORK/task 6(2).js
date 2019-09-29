function isEven(number, parity) {
  if (number === 0) {
    pairity = true;
    return pairity;
  } else if (number === 1) {
    pairity = false;
    return pairity;
  } else {
    if (number < 0) {
      return isEven(number + 2);
    } else {
      return isEven(number - 2);
    }
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
