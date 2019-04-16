/**
 * Write a function int fib(int n) that returns Fn. 
 * For example, if n = 0, then fib() should return 0. 
 * If n = 1, then it should return 1. 
 * For n > 1, it should return Fn-1 + Fn-2
 */
 const fib = (num) => {
  if (num <= 1) return num
  return fib(num - 2) + fib(num - 1)
}

export default fib
