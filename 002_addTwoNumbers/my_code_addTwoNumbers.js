/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let check1 = l1.next.val
    let check2 = l2.next.val
    
    let num1 = ''
    let num2 = ''
    
    while(check1){
        num1 = check1.val + num1
        check1 = check1.next
    }
    
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
    }
    
    return list

}