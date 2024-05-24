// These activities will be most effective if you TRY them first before you look at the solution.
// And after you do look at the solution...DO NOT copy and paste the code. 
// Read through it, try to understand what it is doing...then go fix your code.

// Activity 1 - Map
// map is great when we need to change each item in an array somehow.
// It returns a NEW array and does NOT modify the original array.

/*
Syntax:
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
*/

// 1. Declare an array with value = ['one', 'two', 'three']

// 2. Convert our array of strings into an array of HTML strings. 
// Each string should be turned into a list item. For example: "<li>one</li>"

// 3. Set our list of HTML strings into the myList list. 
// (Hint...checkout the .join() method.)

// Activity 2 - Map
// 1. Declare an array with letter grades in it: ['A', 'B', 'A']

// 2. Write a function that will take one letter grade, and return the appropriate GPA points for that grade. 
// For example: if we send in 'A' it should return 4.
function convertGradeToPoints(grade) {
  // TODO: Return GPA points based on the grade
}

// 3. Use map and our conversion function to convert the array in step 1 to GPA points.

// Activity 3 - Reduce
// reduce is useful when we need to compress an array into a single value. 
// It is most often used when the array has at least one value that can be mathematically flattened.

// 1. Using the function from the previous activity, convert an array of grades into an array of gpaPoints.

// 2. Using reduce, calculate the GPA from the array of gpaPoints.

// 3. Calculate the average GPA


// Activity 4 - Filter
// filter is similar to map in that it returns a new array of elements. 
// The elements in the calling array will be included in the new array if they pass a test that you include in the callback you pass in.

// 1. Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']

// 2. Using filter, keep only the fruits that are longer than 6 characters.


// Activity 5 - indexOf
// indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

// 1. Declare an array with the following value: [12, 34, 21, 54]

// 2. Declare a luckyNumber variable with the value 21

// Use indexOf to see if the luckyNumber is in the Array.