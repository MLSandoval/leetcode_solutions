var checkArithmeticSubarrays = function(nums, l, r) {

  let output = [];
  let diff = 0;
  
  l.forEach((el, ind) => {
    let subStart = l[ind];
    let subEnd = r[ind];
    let tempArray = nums.slice(subStart, subEnd + 1);
    let sorted = tempArray.sort((a,b) => a - b);

    console.log('sorted: ', sorted)
    for(let ind = 0; ind <= sorted.length - 2; ind++){
      let current = sorted[ind];
      let next = sorted[ind + 1];
      
      if(sorted.length === 2){
        output.push(true);
        break;
      }
        
      if(ind === 0){
        diff = current - next;
      }else if((current - next) !== diff){
        output.push(false);
        break;
      }else if(ind === sorted.length - 2 && current - next !== diff){
        output.push(false);
        break;
      }else if(ind === sorted.length - 2 && current-next === diff){
        output.push(true);
        break;
      }
    }
    diff = 0;
  });
    
  return output;
};

  // let nums =[4,6,5,9,3,7]
  // let l =[0,0,2]
  // let r = [2,3,5]

let nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10]
let l = [0,1,6,4,8,7]
let r = [4,4,9,7,9,10]
console.log(checkArithmeticSubarrays(nums,l,r));