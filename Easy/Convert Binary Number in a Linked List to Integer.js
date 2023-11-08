var getDecimalValue = function(head) {
    let cur = head, len = 0, sum = 0;
    
    while (cur) {
        cur = cur.next;
        len++;
    }
    
    while (head) {
        sum += Math.pow(2, --len) * head.val
        head = head.next;
    }
    
    return sum;
};