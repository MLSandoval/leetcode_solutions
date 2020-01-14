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
  
  let count1 = 0
  while(check1){
    console.log('check1 while iteration ' + count1 + ' check1 = ', check1)
    num1 = check1.val + num1
    console.log('check1 while iteration ' + count1 + ' num1= ' + num1)
    check1 = check1.next
    count1++
  }

  let count2 = 0
  while(check2){
    console.log('check2 while iteration ' + count2 + ' check2 = ', check2)
    num2 = check2.val + num2
    console.log('check2 while iteration ' + count2 + ' num2= ' + num2)
    check2 = check2.next
    count2++
  }
  
  let total = parseInt(num1) + parseInt(num2)
  
  let splitTotal = total.toString().split('')
  console.log('splittotal: ', splitTotal)
  let list
  
  let temp = {
    val: splitTotal[0],
    next: null
  }
  console.log('temp: ', temp)

  for(let i = 1; i < splitTotal.length; i++){
    list = {
      val : splitTotal[i],
      next : temp
    }
    temp = list
  }
  
  return list ||'error'

}

console.log(addTwoNumbers(a, b))