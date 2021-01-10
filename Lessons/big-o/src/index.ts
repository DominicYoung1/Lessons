/**
 * Big-O refers to something called BigO Notation
 * 
 * BigO Notation is a way of analyzing how long an algorithm will take, based on the size of its inputs
 * Also called algorithm complextiy.
 */

 /**
  * Goal: To discover how long it takes for bubblesort to run, as a (math) function of the size of input.
  * 
  * To do this, we need to bubbleSort a bunch on a bunch of differently sized inputs, and see the relationship
  */

  /**
   * RESULTS:
   * 
   * When comparing our N value, and our Sorted counts, we see that Sorted Counts = N - 2
   * 
   * For sorted, we have Runtime = O(N)
   *    Say, it takes 5 seconds on 1000 elements
   *         it then takes 10 seconds on 2000 elements
   * 
   * For unsorted, we have Runtime = O(N^2)
   *    Say, it takes 5 seconds on 1000 elements
   *         it then takes 20 seconds on 2000 elements
   * 
   */

  import { bubbleSort, inOrder, bubbleSortPerformance} from './sorting';


  // Given a number n, give back an array of numbers that is n long
  const getArrayofNLong = (n: number) => {
    const ret = [];
    for (let i=1; i < n; i++) {
      ret.push(i);
    }
    return ret;
  };
  
  const getUnsortedArrayofNLong = (n: number) => {
    const ret = [];
    for (let i=1; i < n; i++) {
      ret.push(n - i);
    }
    return ret;
  };
  
  
  const main = () => {
    // const arr = [10,9,8,7,6,5,4,3,2,1];
    // const countsFor10Elems = bubbleSortPerformance(arr, inOrder);
    // console.log("It took ", countsFor10Elems, " to sort an array of 10 elements");
  
    const nValues = [];
    const sortedCounts = [];
    const unSortedCounts = [];
    for (let i = 0; i < 100; i += 5) {
      const preSortedArray = getArrayofNLong(i);
      const unSortedArray = getUnsortedArrayofNLong(i);
      const sortedCounter = bubbleSortPerformance(preSortedArray, inOrder);
      const unSortedCounter = bubbleSortPerformance(unSortedArray, inOrder);
      nValues.push(i);
      sortedCounts.push(sortedCounter);
      unSortedCounts.push(unSortedCounter);
      // console.log(`N=${i} It toozk ${sortedCounter} loops on the sorted array and ${unSortedCounter} loops on the unsorted array`);
    }
    console.log(nValues);
    console.log(sortedCounts);
    console.log(unSortedCounts);
  
  };
  
  
  
  main();