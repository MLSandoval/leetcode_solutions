/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  let map = new Map();
  let total = 0;
  
  stones.split("").forEach((el, i) => {
      let temp = map.get(el)
      
      if(!temp){
          map.set(el, 1)
      }else{ 
          map.set(el, (++temp))
      }
  })
  
  jewels.split("").forEach(letter => {
      if(map.has(letter))
          total += map.get(letter);
      
  })
  
  return total;
};

// "aA"
// "aAAbbbb" 3
// "aAB"
// "aaaAAAbbbBBB" 9
// "z"
// "ZZ" 0