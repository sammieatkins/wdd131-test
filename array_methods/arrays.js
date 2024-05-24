let map_array = ['one', 'two', 'three'];
// Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
// }[, thisArg])
let new_array = map_array.map((item) => {
    return `<li>${item}</li>`
});
console.log(new_array);

let grades = ['A', 'B', 'A'];
let gpa = grades.map((grade) => {
    if (grade === 'A') {
        return 4.0;
    } else if (grade === 'B') {
        return 3.0;
    } else if (grade === 'C'){
        return 2.0;
    } else if (grade === 'D') {
        return 1.0;
    } else {
        return 0.0;
    }
});
console.log(gpa);

// Reduce
let gpa_reduced = gpa.reduce((accumulator, currentValue) => (accumulator + currentValue));
let gpa_average = gpa_reduced / gpa.length;
console.log(gpa_reduced);
console.log(gpa_average.toFixed(2));

// Expected output: 10