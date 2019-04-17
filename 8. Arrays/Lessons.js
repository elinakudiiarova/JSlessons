const f = [2, 6, 8, 6];
for (let i = 0; i < f.length; i = i + 1) { console.log(f[i]); }
const g = [{
    name: `Lara`,
    age: 10
}, {
    name: `Serg`,
    age: 15
}, {
    name: `Elya`,
    age: 12
}];

for (let k = 0; k < g.length; k++)
    console.log(`${g[k].name}, ${g[k].age}`);
    

let y = 0;

for (let i = 0; i < g.length; i++) {
y = y + g[i].age;}
 
console.log(y);
