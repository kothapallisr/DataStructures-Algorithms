function squareDigits(num){
  let numString = num.toString().split("");
  let squaredNums = "";

  for(let i = 0; i < numString.length; i++){
    squaredNums += Math.pow(Number(numString[i]), 2); 
  }
  return Number(squaredNums);
}

console.log(squareDigits(234));
