// Define a function which accepts a coeffitients of square equation
// Return an object contains roots and method print which prints 
// root values or "No roots" if equation has no roots.

function solve(a, b, c) {
    const d = b * b - 4 * a * c;
    
    if (d < 0) {
        return {
            print: function () {
                console.log(`No roots.`);
            }
        };
        
    }

    if (d === 0) {
        return {
            root: -b / (2 * a),
            print: function () {
                console.log(`Have one root ${this.root}`);
            }
        };
    }

    if (d > 0) {
        return {
            root1: (-b + Math.sqrt(d)) / (2 * a),
            root2: (-b - Math.sqrt(d)) / (2 * a),
            print: function () {
                console.log(`Have two roots: ${this.root1} and ${this.root2}`);
            }
        };
    }
    
}

solve(5, 7, 8).print();

solve(1, 1, 1).print();

solve(-7, 8, 10).print();







