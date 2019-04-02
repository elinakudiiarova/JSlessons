function add(a, b, c) {
    return (a + b + c) / 2;
}

function isValidTriangleSides(m, h, s) {
    return (m < (h + s)) && (h < (m + s)) && (s < (m + h));
}

function solve(t, g, l) {
    const p = add(t, g, l);
    console.log(p);
    if (t > 0 && g > 0 && l > 0 && p > 0) {
        if (isValidTriangleSides(t, g, l)) {
            const square = Math.sqrt(p * (p - t) * (p - g) * (p - l));
            console.log(`Площадь треугольника равна ${square} см^2`);  
        } else {
            console.log(`Площадь не может быть вычеслена.`)
        }
    } else {
        console.log(`Площадь треугольника равна 0.Её нельзя вычислить.`);
    }

}

solve(3, 4, 5);

solve(-1, 4, 5);

solve(7, 9, 10);

solve(8, -4, 9);