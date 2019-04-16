# Recursion 🍄

## A story 📒

Once upon a time. A little boy named Martin need to meet an angry dragon to ask something. Here is the argument between them

- 👦Excuse me Mr. Dragon, are any of these numbers odd? (3142 5798 6550 5914).
- 🐲Sorry boy, I'll only tell you if the **first number** in that list is odd.
- 👦But I need to know if any of the numbers in the list are odd!
- 🐲Sorry boy, I'll only tell you if the **first number** in that list is odd.
- 👦Hmmm...Ok fine, what about the first number in this list (**3142** 5798 6550 5914)
- 🐲NOT ODD!
- 👦And what about the first number in this list (**5798** 6550 5914)
- 🐲NOT ODD!
- 👦Ok fine, what about the first number in this list (**6550** 5914)
- 🐲NOT ODD!
- 👦Ok fine, what about the first number in this list (**5914**)
- 🐲NOT ODD!
- 👦Ok fine, what about the first number in this list ( )
- 🐲That's an empty list you moron! There isn't a number in there!
- 👦AHA! SO all the numbers are even in that list!
- 🐲I NEVER SAID THAT!

Congratulations, you discovered recursion boy 🔥

## What is recursion? 
A process (a function in our case) that calls itself

## Why?
It's everywhere

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration

## How recursive functions work
Invoke the **same** function with a different input until you reach your base case!

There are two essential parts of a recursive function
1. Base case
2. Different input

## Helper method recursion
See `collect_odd_values_with_helper.js` to understand about Helper method

Here is the template for helper method recursion

```
function outer(input){
  var outerScopedVariable = []

  function helper(helperInput){
      // modify the outerScopedVariable
      helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable
}
```

## Pure Recursion Tips
See `collect_odd_values_with_pure_recursion.js` to understand about the Pure solution

- For arrays, use methods like **slice**, **the spread operator**, and **concat** that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **substring** to make copies of strings.
- To make copies of objects use **Object.assign**, or **the spread operator**.

## Run tests

`npm run test-recursion`

## Practicing recursion

1. Write a JavaScript program to get the integers in range (x, y). 
```
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
```
2. Write a JavaScript program to compute the sum of an array of integers.
```
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 
```
3. Write a JavaScript program to compute the exponent of a number.
```
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
```

## References
- [Recursion slides](https://cs.slides.com/colt_steele/searching-algorithms-22#/23)
- [JS recursion functions exercises](https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php)
