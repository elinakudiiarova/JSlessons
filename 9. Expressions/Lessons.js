const y = {
    name: `Elya`,
    marks: [9, 10, 8, 11, 12, 9, 10]
};

console.log(y.name);

console.log({
    name: `Katya`
}.name)

console.log(student().name);

console.log(add(5));

console.log(add(y.marks[2]));

console.log(y.marks[indexFromOrdinal(2)]);

console.log(student().marks[indexFromOrdinal(3)]);




function student() {
    return {
        name: `Vova`,
        marks: [5, 4, 10, 5, 8, 9]
    };
}

function indexFromOrdinal(ordinal) {
    return ordinal - 1;
}




function add(y) {
    return y + 10;
}


