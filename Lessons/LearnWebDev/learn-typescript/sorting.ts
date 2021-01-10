

const bubbleSort = (array, inOrder) => {
  let counter = 0;
  let foundAnIssue = true;
  while (foundAnIssue) {
    foundAnIssue = false;
    for (let i=1; i < array.length; i++) {
      counter += 1;
      if (!inOrder(array[i - 1], array[i])) {
        const temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        foundAnIssue = true;
      }
    }
  }
  console.log(`Took ${counter} loops to process an array of ${array.length} elements`);
  return array;
}

const inOrder = (a, b) => {
  if (a <= b) return true;
  else return false;
}

const myArray = [];
const n = 10;
for (let i = 0; i < n; i++) myArray.push(n - i);
// console.log(myArray);
// const myArray = [4, 3, 8, 2, 3, 4, 5,7,8,6,3,1,3,6,8,9,3,4,6,8,9,6,54,23,21,4,5,675,654324,37,567,234,134,634,7,354562,345254,6345,6];
// console.log("About to sort myArray", myArray);
const sortedArr = bubbleSort(myArray, inOrder);
// console.log("Sorted it to", sortedArr);