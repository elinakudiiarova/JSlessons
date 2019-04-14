function des(a, b, c) {
    return b * b - 4 * a * c;
}

function solve(o, p, s) {
    const d = des(o, p, s);
    console.log(d);
    if (d < 0) {
        //console.log(`Дискриминант равен ${d}. Дискриминант меньше нуля, значит корней нету.`);
        return {
            print: function () { 
                console.log("No roots")
            }
        }
    }

    if (d === 0) {
        const root = -p / (2 * o);
        console.log(`Дискриминант равен 0, значит есть один корень равен ${root}`);
    }

    if(d > 0) {
        const root1 = (-p + Math.sqrt(d)) / (2*o);
        const root2 = (-p - Math.sqrt(d)) / (2*o);
        console.log(`Дискриминант равен ${d}, значит есть два корня: ${root1} и ${root2}`);
    }
}

solve(2, 4, 5);

solve(2, 4, 2);

solve(2, 10, 1);

