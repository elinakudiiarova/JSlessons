function geomtrypr(a, b, n) {
    return b * Math.pow(a, n - 1);

}

let m = 1;
while (m <= 10) {
    console.log(geomtrypr(6, 4, m));
    m = m + 1
}