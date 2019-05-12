// find max number in array of numbers

const arr = [-1, -2, -20, -3, -45, -6];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    };
};

console.log(max)

// find index of max number in array

let max = arr[0]; let maxi = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxi = i;
    };

};

console.log(max)
console.log(maxi)

