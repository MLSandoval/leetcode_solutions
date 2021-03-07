var isPalindrome = function(x) {
    x = String(x).split("");

    while(x.length > 1){
      if(x.shift() === x.pop()){
        continue;
      }else{
        return false
      }
    }
    return x.length <= 1 ? true : false;
};
let x = 1551;
let y = 1;
console.log(x)
console.log(isPalindrome(x))
console.log(y)
console.log(isPalindrome(y))
console.log(1245)
console.log(isPalindrome(1245))
console.log(0)
console.log(isPalindrome(0))