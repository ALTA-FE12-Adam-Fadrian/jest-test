let exponentiation = (x, n) => {
    let pow = 1;
    for (let i = 0; i < n; i++) {
        pow = pow * x;
    }
    return pow;    
}
module.exports = {exponentiation};

