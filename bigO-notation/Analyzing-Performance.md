# Analyzing Performance of Arrays and Objects 🐒
A quick summary

## Big O of objects
When you don't need any ordering, objects are an excellent choice!

**1. Main Operations**
- Insertion - `O(1)` - constant time
- Removal - `O(1)`
- Searching - `O(n)` - linear time
- Access - `O(1)`

**2. Big O of Object Built-in Methods**
- Object.keys - `O(n)`
- Object.values - `O(n)`
- Object.entries - `O(n)`
- hasOwnProperty - `O(1)`

## Big O of arrays (ordered lists)
When you need order (note that still have another data-structures) and when you need fast access / insertion and removal (sort of...)

**1. Main Operations**
- Insertion - It depends...
- Removal - It depends...
- Searching - `O(n)`
- Access - `O(1)` (*It doesn't matter how long the array is, it doesn't matter if you're looking at the last item, middle item or the first item*)
 - **Problems:** *If you want to insert a element at the beginning of array, you have to re-index every single element in array (`O(n)` time). The same problem goes with removing a element at the beginning*.

**2. Big O of Array Built-in Methods**
- push - `O(1)`
- pop - `O(1)`
- shift - `O(n)`
- unshift - `O(n)`
- concat - `O(n)`
- slice - `O(n)`
- splice - `O(n)`
- sort - `O(n * log n)`
- forEach/map/filter/reduce/etc. - `O(n)`

## References

- [Built in Data Structures Slides](https://cs.slides.com/colt_steele/built-in-data-structures-25#/)


