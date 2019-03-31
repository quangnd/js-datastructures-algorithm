import countUniqueValues from './countUniqueValues';
import test from 'ava';

test('Should return 0 with empty array', t => {
	t.is(countUniqueValues([]), 0);
});

test('Should return the total of unique values in the array', t => {
   t.is(countUniqueValues([1,1,1,1,1,2]), 2);
   t.is(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), 7);
   t.is(countUniqueValues([-2,-1,-1,0,1]), 4);
});
