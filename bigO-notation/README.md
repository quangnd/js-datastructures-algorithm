# Introduce to Big O Notation
How can we determine which function is the "Best" ?

## What Big O Notation is?

- Big O Notation is just a way of formalize fuzzy counting
- It allow us to talk formally about how the runtime of an algorithm grows as the inputs grow.
- We won't care about the details, only the trends.
- **Definition**: We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as n increases
  - f(n) could be linear (f(n) = n). 
  - f(n) could be quadratic (f(n) = n<sup>2</sup>).
  - f(n) could be constant (f(n) = 1)
  - f(n) could be something entirely different!

## Why ?

- It's important to have a precise vocabulary to talk about how our code perform (compared to others).
- Useful for discussing trade-offs between different approaches.

## Define "Time complexity" and "Space complexity"


## Ref
- [Performance Timing API](https://nodejs.org/docs/latest-v8.x/api/perf_hooks.html#perf_hooks_performance_now)
- [Function timer demo](https://rithmschool.github.io/function-timer-demo/)
- [Big O Notation Introduction Slides](https://cs.slides.com/colt_steele/big-o-notation)
