const c = [{
    name: `Elya`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Nicole`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Katya`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: 'Alina',
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]

}, {
    name: `Ilya`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Vlad`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Arina`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Lisa`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Masha`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}, {
    name: `Leonid`,
    courses: [{
        title: `Russian`,
        marks: [10, 9, 9, 8, 11, 10]
    }, {
        title: `Ukrainian`,
        marks: [9, 9, 10, 8, 10, 9]
    }, {
        title: `Math`,
        marks: [10, 12, 10, 11, 10, 10]
    }]
}];

for (let k = 0; k < c.length; k++) {
    console.log(c[k].name);
    let all = 0;
    for (let h = 0; h < c[k].courses.length; h++) {
        all = all + avg(c[k].courses[h].marks);
        console.log(`${c[k].courses[h].title} : ${avg(c[k].courses[h].marks)}`)
    }
    console.log(all / c[k].courses.length);
}

function avg(m) {
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
        sum = sum + m[i];
    }
    return sum / m.length;
}