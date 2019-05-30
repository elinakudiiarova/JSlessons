// reduce

const array = [20, 10, 3, 7];

console.log(array.reduce((result1, elem) => result1 + elem));

console.log(array.reduce((result, elem, index) => {
    console.log(`Iteration: ${index}, element: ${elem}, result: ${result}`);
    return result + elem / array.length;
}, 0));

const word = [`Lena,`, `Lika,`, `Lisa,`, `Lisa`];

console.log(word.reduce((word, sum) => word + sum));

console.log(array.reduce((min, elem) => {
    if (elem < min) {
        return elem;
    } else {
        return min;
    };
}));
