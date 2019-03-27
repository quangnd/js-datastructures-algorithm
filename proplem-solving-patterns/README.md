# Problem solving approach & patterns 🤺

## How do you improve? 🔥

1. Devise a plan for solving problems
2. Master common problem solving patterns

## Devise a plan for solving problems 🗒

**1. Understand the Problem**
- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the - solution to the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? *(You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)*
- How should I label the important pieces of data that are a part of the problem?

**2. Explore Concrete Examples**
- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

**3. Break It Down**
- Explicitly write out the steps you need to take *(This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.)*

**4. Solve/Simplify**
- If you can't solve the problem, solve the simpler problem. 
- To simplify, you need:
  - Find the core difficulty in what you're trying to do
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in

**5. Look Back and Refactor**
- Refactor questions:
  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?

## Problem solving patterns 👓
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- more...

1. **Frequency counter**
- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
- Example: *Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.*
  ```
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be same frequency)
  ```
  Check `same_naive.js` and `same_refactored.js` to see details. Also have a look in `anagram_frequency_counter.js`.

## References
- [Problem solving patterns slides](https://cs.slides.com/colt_steele/problem-solving-patterns#/)
