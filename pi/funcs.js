function solveQuadraticEquation(a, b, c){
    let d = Math.sqrt(b**2 - 4*a*c)/(2*a);
    if (!d) return []; // bug? how about zero?
    let e = -b/(2*a);
    return [e+d, e-d]
}
function getSecondGradient(firstGradient, angleBtw) {
    let a = firstGradient, q = angleBtw;
    return (tan(q)-a)/(1+a*tan(q))
}