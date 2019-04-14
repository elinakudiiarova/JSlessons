const g = 9.8;
function time(f) {
    return {
        speed: f * g,
        distantion: 0.5 * g * (f * f),
        print: function (f) {
            console.log(`t = ${f/60} min, V = ${this.speed} m/sec, S = ${this.distantion} m `)
        }
    };
    
}

for (let f = 0; f <= 3600; f = f + 60) {
    let m = time(f);
    m.print(f)
};

