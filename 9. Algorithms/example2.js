function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    };
};

let a = 1;
let b = 5;

let c = b;

b = a;
a = c;

// ["e", "l", "y", "a", 1] -> ["a", "y", "l", "e"]

function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let c = array[i];
        array[i] = array[(array.length - 1) - i];
        array[array.length - 1 - i] = c;
    };
    return array
}

console.log (reverse(["e", "l", "y", "a"]));


