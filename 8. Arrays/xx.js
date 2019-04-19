function avg(m) {
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
        sum = sum + m[i];
    }
    return sum / m.length;
}

console.log(avg([0].marks));



