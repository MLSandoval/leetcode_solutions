/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let array = [];

  while(head !== null){
    array.push(head.val)
    head = head.next;
  }
  console.log(array)

  while(array.length > 1){
      if(array.shift() === array.pop()){
        continue;
      }else{
          return false;
      }
  }
  return true;
};

w = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
}
x = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 1,
        next: null
      }
    }
  }
}



console.log(isPalindrome(w))
console.log(isPalindrome(x))