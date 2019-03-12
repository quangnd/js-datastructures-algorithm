import LinkedListNode from '../data-structures/linked-list/finished/LinkedListNode';
import test from 'ava';

test('Should create list node with value', t => {
	const node = new LinkedListNode(1);
	t.is(node.value, 1);
});

test('Should create list node with object as a value', t => {
	const nodeValue = { value: 1, key: 'test' };
	const node = new LinkedListNode(nodeValue);

	t.is(node.value.value, 1);
	t.is(node.value.key, 'test');
	t.is(node.next, null);
	// expect(node.next).toBeNull();
})

test('Should link nodes together', t => {
	const node2 = new LinkedListNode(2);
	const node1 = new LinkedListNode(1, node2);

	t.is(typeof node1.next, 'object'); //node1 is defined
	t.is(node2.next, null);
	t.is(node1.value, 1);
	t.is(node1.next.value, 2);
})


