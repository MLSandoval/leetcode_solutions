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
console.log('a: ', a)
console.log('b: ', b)
 

var addTwoNumbers = function(l1, l2) {
    
    let check1 = l1
    let check2 = l2
    
    let num1 = ''
    let num2 = ''
    
    // while(check1.next){
    //   console.log('while loop check1 list1: ', check1)
    //   console.log(typeof check1.val.toString())
    //     num1 = check1.val.toString() + num1;
    //   console.log('num1: ', num1)
    //     check1 = check1.next

    // }
    
    while(check2){
        num2 = check2.val + num2
        check1 = check2.next
    }
    
    let total = num1.parseInt() + num2.parseInt()
    
    let splitTotal = total.toString().split()
    console.log(splitTotal)
    let list
    
    // for(let i = splitTotal.length() - 1; i >= 1; i-=2){
    //     list = {
    //         val : splitTotal[i],
    //         next : {
    //             val : splitTotal[i-1],
    //             next : splitTotal[i-2] || null
    //          }
    //     }
    // }
    
    return list ||'error'

}

console.log(addTwoNumbers(a, b))