function sortArray(arr) {
    return arr.sort(function (a, b) { return a - b; });
}
console.log(sortArray([5, 3, 8, 1, 2])); //[   1,   2,   3,   5,   8]
