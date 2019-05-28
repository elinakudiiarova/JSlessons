// reduce

const array = [20, 10, 3, 7];

console.log(array.reduce((array, elem) => array + elem));

console.log(array.reduce((array, elem) => array + elem) / array.length);

const word = [`Lena`, `Lika`, `Lisa`, `Lisa`];

console.log(word.reduce((word, sum) => word + sum));
