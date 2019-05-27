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

// map

console.log(`age of students`);
console.log(students.map(a => a.age));

console.log(`string with all info about student`);
console.log(students.map(a => `Name: ${a.name}, age: ${a.age}, gender: ${a.gender}.`));

console.log(`if boy - years before army; else - age`);
console.log(students.map(m => {
    if (m.gender === `M`) {
        return 18 - m.age;
    } else {
        return m.age;
    }
}));
