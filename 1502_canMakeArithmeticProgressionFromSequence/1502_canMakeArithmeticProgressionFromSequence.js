var canMakeArithmeticProgression = function(arr) {
  let current, next, currentDiff, compareDiff;
  
  let sorted = arr.sort((a, b)=> a-b)
  for(let i = 0; i < sorted.length - 1; i++){
    current = sorted[i];
    next = sorted[i + 1];
      
    if(i === 0){
      compareDiff = current - next;
      continue;
    }

    currentDiff = current - next;
      
    if(currentDiff !== compareDiff){
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 6, 5, 1]))

/*
  i: int array
  o: boolean
  c: array.length between 2 and 1000
     int values from -10^6 to 10^6


  arrays must be sorted sequentially to possibly be an arithmetic progression,
  sort array
  test for progression
*/

