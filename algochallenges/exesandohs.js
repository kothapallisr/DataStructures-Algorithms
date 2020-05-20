function XO(str){
  let xCount = 0;
  let oCount = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase() === 'x') {
      xCount++;
    } 
    if(str[i].toLowerCase() === 'o') {
      oCount++;
    }
  }
  if(xCount === 0 && oCount === 0){
    return true;
  } else if(xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("xoxoxoxxoo"));
console.log(XO("oxoxo"));
console.log(XO("dkskw"));
