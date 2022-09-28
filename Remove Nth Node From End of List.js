var removeNthFromEnd = function(head, n) {
  let root = head;
  let clone = head;
  let len = 0;
 
  while (clone) {
    len++;
    clone = clone.next;
  }
  
  let count = len - n;
  if (count === 0) return head.next;
  while (root && count > 1) {
    root = root.next;
    count--;
  }

  root.next = root.next && root.next.next;
  return head;
};
var removeNthFromEnd = function(head, n) {
  const help = (root, count) => {
    if (root.next) count = help(root.next, count);
    
    if (count === n) root.next = root.next.next;
    return ++count;
  }
  const count = help(head, 0);
  return count === n ? head.next : head;
};
var removeNthFromEnd = function(head, n) {
  const root = new ListNode(0);
  root.next = head;
  let front = root;
  let back = root;
  while (n >= 0) {
    front = front.next;
    n--;
  }
  while (front) {
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return root.next;
};