
function studentScore(number) {
    if (number < 0 || number > 100) return console.log("invalid") 
    
    if (number >= 80 && number <= 100) {
        console.log("A")
    } else if (number >= 65) {
        console.log("B+")
    } else if (number >= 50) { 
        console.log("B") 
    }
    else if (number >= 35) {
        console.log("C")
    } else if (number >= 0) {
        console.log("D")
    } return number
}
module.exports = {studentScore};