var mergeNodes = function (head) {
    let modify = head.next
    let nextSum = modify 

    while(nextSum !== null ){
        let sum = 0 ;
        while(nextSum.val !== 0){
            sum += nextSum.val
            nextSum = nextSum.next
        }
        modify.val = sum
        nextSum = nextSum.next

        modify.next = nextSum
        modify = modify.next
    }  

    return head.next
};
