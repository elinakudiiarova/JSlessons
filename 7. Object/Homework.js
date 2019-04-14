const g = 9.8;
function time(f) {
    const h = {
        speed: f * g,
        distantion: 0.5 * g * (f * f),
        print: function (f) {
            console.log(`t = ${f} min, V = ${this.speed} m\sec, S = ${this.distantion} m `)
        }
    };
    return h;
}

for (let f = 0; f <= 60; f = f + 1) {
    let m = time(f);
    m.print(f)
};