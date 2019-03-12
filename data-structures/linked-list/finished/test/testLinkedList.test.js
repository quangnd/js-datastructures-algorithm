import LinkedListNode from '../LinkedListNode';
import test from 'ava';

test('should create list node with value', t => {
	const node = new LinkedListNode(1);
	t.is(node.value, 1);
});

test('should create list node with object as a value', t => {
	const nodeValue = { value: 1, key: 'test' };
	const node = new LinkedListNode(nodeValue);

	t.is(node.value.value, 1);
	t.is(node.value.key, 'test');
	t.is(node.next, null);
	// expect(node.next).toBeNull();
})

test('should link nodes together', t => {
	const node2 = new LinkedListNode(2);
	const node1 = new LinkedListNode(1, node2);

	t.is(typeof node1.next, 'object'); //node1 is defined
	t.is(node2.next, null);
	t.is(node1.value, 1);
	t.is(node1.next.value, 2);
})
// it('should link nodes together', () => {
// 	const node2 = new LinkedListNode(2);
// 	const node1 = new LinkedListNode(1, node2);

// 	expect(node1.next).toBeDefined();
// 	expect(node2.next).toBeNull();
// 	expect(node1.value).toBe(1);
// 	expect(node1.next.value).toBe(2);
// });

