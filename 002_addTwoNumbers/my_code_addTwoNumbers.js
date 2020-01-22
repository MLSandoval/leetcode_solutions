/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}ß
 */

let a = {
  val: 2,
  next : {
    val : 4,
    next :{
      val: 3,
      next: null
    }
  }
}

let b = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}

c = {
  val: 0,
  next: null
}


d = {
  val: 0,
  next: null
}

let e = {
  val: 1,
  next:{
    val: 0,
    next:{
      val: 0,
      next:{
        val: 0,
        next:{
          val: 0,
          next:{
            val: 0,
            next:{
              val: 0,
              next:{
                val: 0,
                next:{
                  val: 0,
                  next:{
                    val: 0,
                    next:{
                      val: 0,
                      next:{
                        val: 0,
                        next:{
                          val: 0,
                          next:{
                            val: 0,
                            next:{
                              val: 0,
                              next:{
                                val: 0,
                                next:{
                                  val: 0,
                                  next:{
                                    val: 0,
                                    next:{
                                      val: 0,
                                      next:{
                                        val: 0,
                                        next:{
                                          val: 0,
                                          next:{
                                            val: 0,
                                            next:{
                                              val: 0,
                                              next:{
                                                val: 0,
                                                next:{
                                                  val: 0,
                                                  next:{
                                                    val: 0,
                                                    next:{
                                                      val: 0,
                                                      next:{
                                                        val: 0,
                                                        next:{
                                                          val: 0,
                                                          next:{
                                                            val: 0,
                                                            next:{
                                                              val: 1,
                                                              next: null
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

let f = {
  val: 5,
  next: {
    val: 6,
    next:{
      val: 4,
      next: null
    }
  }
}

console.log('a: ', a)
console.log('b: ', b)

var addTwoNumbers = function(l1, l2) {
    
  let check1 = l1
  let check2 = l2
  
  let num1 = ''
  let num2 = ''
  
  let count1 = 0
  while(check1){
    num1 = check1.val + num1
    check1 = check1.next
    count1++
  }

  let count2 = 0
  while(check2){
    num2 = check2.val + num2
    check2 = check2.next
    count2++
  }
  console.log('num1: ', num1)
  console.log('num2: ', num2)
  
  let total = parseInt(num1) + parseInt(num2)
  console.log('total: ', total)
  let splitTotal = total.toString().split('')
  console.log('splitTotal: ', splitTotal)

  let list
  let temp = {
    val: splitTotal[0],
    next: null
  }

  if(splitTotal.length <= 1){
    return {
      val: parseInt(splitTotal[0]),
      next: null
    }
  }

  for(let i = 1; i < splitTotal.length; i++){
    list = {
      val : splitTotal[i],
      next : temp
    }
    temp = list
  }

  return list
}


console.log(addTwoNumbers(a, b))

console.log('BREAKKKKKKKKKKKK')


console.log(addTwoNumbers(c,d))

console.log('BREAKKKKKKKKKKKK')


console.log(addTwoNumbers(e,f))

//recursive
//map both lists into arrays to make easier to manipulate
//conditionals to check array length, if > 1 shift value and manipulate as needed, if 0 end recurse

const addTwoNumRecurse = (l1, l2) => {
  
}