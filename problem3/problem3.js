function primeNumber(num){
  let primeNumber = '';
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      primeNumber = false;
    } else {
      primeNumber = true;
    }
  }
  return primeNumber;

}


  module.exports = {primeNumber};