function countBs(string) {
  let B = string.length;
  return B;
}

console.log(countBs("Hello"));

function countChar(string, N) {
  let symbol = string.charAt(N - 1);
  return symbol;
}

console.log(countChar("Hello", 2));
