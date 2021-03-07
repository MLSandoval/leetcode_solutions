/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  

  let isNegative = false;
  let numberArray = [];
  let reversed = 0;
  
  if(x<1){
    isNegative = true;
    x *= -1;
  }

  while(x > 0){
    let digit = x % 10;
    x = Math.round(x / 10 - .5);
    numberArray.push(digit);
  }
  
  reversed = isNegative ? Number(numberArray.join("")) * (-1) : Number(numberArray.join(""));

  if(reversed >= (Math.pow(2, 31) - 1) || reversed <= Math.pow(-2, 31)){
    return 0;
  }

  return reversed;
};

let x = 123456;
console.log(x);
console.log(reverse(x));