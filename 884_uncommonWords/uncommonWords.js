uncommonFromSentences = function(A, B) {
    let map = new Map();
    let uncommons = [];
    
    A.split(" ").forEach(el => {
        let temp = map.get(el);
        if(temp === undefined){
            map.set(el, 1)   
        }else{
            map.set(el, ++temp)
        }
        
    });
    
    B.split(" ").forEach(el => {
        let temp = map.get(el);
        if(temp === undefined){
            map.set(el, 1)   
        }else{
            map.set(el, ++temp)
        }
        
    });
    
    map.forEach((val,key) => {
        if(val === 1){
            uncommons.push(key);
        }
    })
    
    return uncommons;
};

// "this apple is sweet" 
// "this apple is sour" [sweet, sour]
// "apple apple"
// "banana" [banana]