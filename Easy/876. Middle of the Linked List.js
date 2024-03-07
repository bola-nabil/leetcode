class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var middleNode = function (head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
