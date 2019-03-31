import maxSubarraySum from './max_sum_refactored';
import test from 'ava';

test('Should return null if the length of array less than the second param n', t => {
	t.is(maxSubarraySum([], 4), null);
});

test('Should return the maximum sum of n consecutive elements in the array', t => {
   t.is(maxSubarraySum([1,2,5,2,8,1,5], 2), 10);
   t.is(maxSubarraySum([1,2,5,2,8,1,5], 4), 17);
   t.is(maxSubarraySum([4,2,1,6], 1), 6);
   t.is(maxSubarraySum([4,2,1,6,2], 4), 13);
});
