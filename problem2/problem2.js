let exponentiation = (n, x) => {
    if(n <= 1) {
        return n;
    } else {
        return x * exponentiation(x, n -1)
    }
}





module.exports = {exponentiation};