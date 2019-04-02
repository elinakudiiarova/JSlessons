function add(a, b, c) {
    return (a + b + c) / 2;
}
    
function solve(t, g, l) {
    const p = add(t, g, l);
    console.log(p);
    if (t > 0 && g > 0 && l > 0 && p > 0) {
    const square = Math.sqrt(p*(p - t)*(p - g)*(p - l));
    console.log(`Площадь треугольника равна ${square} см^2`);
    }

    if (t < 0 || g < 0 || l < 0 || p < 0) {
    console.log(`Площадь треугольника равна 0.Её нельзя вычислить.`);
    }
}

solve(3, 4, 5);

solve(-1, 4, 5);

solve(7, 9, 10);

solve(8, -4, 9);