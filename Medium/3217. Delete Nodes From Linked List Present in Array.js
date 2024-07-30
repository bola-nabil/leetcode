var modifiedList = function(nums, head) {
    const set = new Set(nums);
    let dummy = new ListNode();
    let prev = dummy;
    dummy.next = head;
    let cur = head;

    while(cur) {
        if(set.has(cur.val))
            prev.next = cur.next;
        else 
            prev = cur;
        
        cur = cur.next;
    }
    return dummy.next;
};
