class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const mergeLists = new ListNode();
  let [cursor, l1Cursor, l2Cursor] = [mergeLists, l1, l2];

  while (l1Cursor || l2Cursor) {
    const pickedValue = Math.min(
      ...[l1Cursor?.val, l2Cursor?.val].filter((v) => v !== undefined)
    );

    if (l1Cursor?.val === pickedValue) {
      l1Cursor = l1Cursor.next;
    } else {
      l2Cursor = l2Cursor.next;
    }

    cursor.next = new ListNode(pickedValue);
    cursor = cursor.next;
  }

  return mergeLists.next;
}
