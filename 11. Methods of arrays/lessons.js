// filter

const students = [{
    name: `Lisa`,
    age: 12,
    gender: `F`
}, {
    name: `Vadik`,
    age: 15,
    gender: `M`
}, {
    name: `Lia`,
    age: 1,
    gender: `F`
}, {
    name: `Vanya`,
    age: 5,
    gender: `M`
}];

const boys = students.filter(m => m.gender === `M`);

console.log(boys);

console.log(`boys over ten`);
console.log(students.filter(m => m.gender === `M` && m.age > 10));

console.log(`boys over 10 using two filter calls`);
console.log(students.filter(m => m.gender === `M`).filter(m => m.age > 10));

console.log(`reusing filter function`);
const over10 = (a) => a.age > 10;
console.log(students.filter(f => f.gender === `F`).filter(over10));

console.log(`every second student`);
console.log(students.filter((m, i) => i % 2 === 0));
