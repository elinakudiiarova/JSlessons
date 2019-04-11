const g = 9.8;
function speed(t) {
    return g * t;
}

function s(t) {
    return 0.5 * g * (t * t);
}

let t = 0;
while (t <= 60) {
    console.log(`t = ${t} min, V = ${speed(t * 60)} m/sec, S = ${s(t * 60)} m`)
    t = t + 1;
}