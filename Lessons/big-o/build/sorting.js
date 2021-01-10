"use strict";
// Running typescript:
// To run typescript, you will want to run `ts-node path/to/file.ts`
Object.defineProperty(exports, "__esModule", { value: true });
exports.inOrder = exports.bubbleSort = void 0;
var bubbleSort = function (array, inOrder) {
    var counter = 0;
    var foundAnIssue = true;
    while (foundAnIssue) {
        foundAnIssue = false;
        for (var i = 1; i < array.length; i++) {
            counter += 1;
            if (!inOrder(array[i - 1], array[i])) {
                var temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                foundAnIssue = true;
            }
        }
    }
    console.log("Took " + counter + " loops to process an array of " + array.length + " elements");
    return array;
};
exports.bubbleSort = bubbleSort;
var inOrder = function (a, b) {
    if (a <= b)
        return true;
    else
        return false;
};
exports.inOrder = inOrder;
// const myArray = [];
// const n = 100;
// for (let i = 0; i < n; i++) myArray.push(n - i);
// // console.log(myArray);
// // const myArray = [4, 3, 8, 2, 3, 4, 5,7,8,6,3,1,3,6,8,9,3,4,6,8,9,6,54,23,21,4,5,675,654324,37,567,234,134,634,7,354562,345254,6345,6];
// // console.log("About to sort myArray", myArray);
// const sortedArr = bubbleSort(myArray, inOrder);
// console.log("Sorted it to", sortedArr);
