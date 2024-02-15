
// * Improved Partition Function (Lomuto Partition Scheme)
function partition(arr, left, right) {
  // Choosing the rightmost element as the pivot for simplicity
  const pivot = arr[right];
  // Initialize the partition index to the leftmost index
  let partitionIndex = left;

  // Iterate over the array from left to right-1
  for (let i = left; i < right; i++) {
      // If the current element is less than or equal to the pivot
      if (arr[i] <= pivot) {
          // Swap arr[i] with arr[partitionIndex] if they're not the same
          if (i !== partitionIndex) {
              [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
          }
          // Move the partition index to the right
          partitionIndex++;
      }
  }
  // After the loop, swap the pivot with the element at the partition index
  [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];
  // Return the partition index, where all elements to the left are less than the pivot
  // and all elements to the right are greater than the pivot
  return partitionIndex;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  // Only proceed if there are at least two elements to sort.
  if (low < high) {
      // Partition the array and get the pivot's final index.
      let pivotIndex = partition(arr, low, high);

      // Recursively apply QuickSort to the sub-array to the left of the pivot.
      quickSort(arr, low, pivotIndex - 1);
      // Recursively apply QuickSort to the sub-array to the right of the pivot.
      quickSort(arr, pivotIndex + 1, high);
  }
  // Return the sorted array.
  return arr;
}


let randomArr = Array.from({length: 10000000}, (_, i) => i + 1);
randomArr.sort(() => Math.random() - 0.5);
let randomArrA = randomArr.slice();
let randomArrB = randomArr.slice();

console.time('timer1');
let sorted = quickSort(randomArrA);
// console.log(sorted);
console.timeEnd('timer1');

console.time('timer1');
let sorted2 = randomArrB.sort((a, b) => a - b);
// console.log(sorted2);
console.timeEnd('timer1');

// Was sorting algorithm successful?
console.log(sorted.every((e, i) => e === randomArrB[i]));


// array input : random  sorted
// mergesort   : 10.393s 10.100s
// quicksort   : 10.272s CRASH
// sort method : 3.029s  154ms
// My Hybrids -----------------
// QS Lomuto   : 1.240s  CRASH
// QS Hoare    : 1.149s  324ms
