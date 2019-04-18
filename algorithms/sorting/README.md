# Elementary Sorting Algorithms 🧦

## Objective

- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms

## What is sorting?
*Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order*

Examples
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

## Why do we need to learn this?

- Sorting is an incredibly common task, so it's good to know how it works.
- There are many different ways to sort things, and different technique have their own advantages and disadvantages.
- Sorting sometimes has quirks, so it's good to understand how to navigate them.

## Bubble sort 🛁
*A sorting algorithm where the largest values bubble up to the top!*

### Example

- ![Binary search bigO example 1](../../assets/images/bubble-sort-1.png)

### Pseudocode
*Check out [Visualgo.net](https://visualgo.net/en/sorting), click **Bubble sort** to see the visualization.*

- Start looping from with a variable called i at the end of the array towards the beginning.
- Start an inner loop with a variable called j from the beginning until i - 1.
  - If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array

## References

- [Elementary sorting algorithm slides](https://cs.slides.com/colt_steele/elementary-sorting-algorithms#/3)
- [Sorting algorithms animation](https://www.toptal.com/developers/sorting-algorithms)
- [Sorting in action](http://sorting.at/)
- [JS built-in sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Visual sort by Visualgo.net](https://visualgo.net/en/sorting)
