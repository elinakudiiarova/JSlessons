const g = 9.8;  
function time(f) {
    const h = {
        speed: f * g,
        distantion: 0.5 * g * (f * f)
    };
    return h;
}

for (let f = 0; f <= 60; f = f + 1){
    let m = time(f);
    console.log(`t = ${f} min, V = ${m.speed} m/sec, S = ${m.distantion} m`)
}