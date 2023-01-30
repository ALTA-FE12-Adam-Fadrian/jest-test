
function studentScore(number) {
    if (number < 0 || number > 100) return "invalid"
    
    if (number >= 80 && number <= 100) {
        return "A"
    } else if (number >= 65) {
        return "B+"
    } else if (number >= 50) { 
        return "B" 
    } else if (number >= 35) {
       return "C"
    } else if (number >= 0) {
        return "D"
    } return number;
}





module.exports = {studentScore};