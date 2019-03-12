import LinkedList from '../data-structures/linked-list/finished/LinkedList';
import test from 'ava';

test(`Should create empty linked list`, t => {
	const linkedList = new LinkedList();
	t.is(linkedList.toString(), '');
});
