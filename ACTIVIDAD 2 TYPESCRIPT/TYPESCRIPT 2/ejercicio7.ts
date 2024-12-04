function sortArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 1, 2])); //[   1,   2,   3,   5,   8]
