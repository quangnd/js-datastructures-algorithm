const { performance } = require('perf_hooks');

/**
 * Always 3 operations
 * O(1)
 * @param {number} n 
 */
function addUpTo(n) {
  return n * (n + 1) / 2;
}

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
