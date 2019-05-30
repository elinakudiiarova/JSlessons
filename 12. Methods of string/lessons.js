const students = [{
    name: `Lisa Fire`,
    age: 12
}, {
    name: `Vadik Salo`,
    age: 15
}, {
    name: `Lia Miali`,
    age: 1
}, {
    name: `Vanya Fastyp`,
    age: 5
}, {
    name: `Lena Fire`,
    age: 12
}, {
    name: `Vadik Lox`,
    age: 15
}, {
    name: `Lia Fastyp`,
    age: 1
}, {
    name: `Vanya Sunday`,
    age: 5
}];

console.log("вывела ВАдиков");
console.log(students.filter(m => m.name.includes("Vadik")));

console.log("вывести строку, содержащий имена всех учеников");
console.log(students.map(m => m.name.split(" ")[0]).join(","));
