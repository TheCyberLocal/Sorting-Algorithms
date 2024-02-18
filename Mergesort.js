// Merge Sort out-of-place
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort the left half
  const leftSorted = mergeSort(left);
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  let merged = [];
  let indexA = 0, indexB = 0;

  while (indexA < arrA.length || indexB < arrB.length) {
    if (indexA === arrA.length || arrA[indexA] > arrB[indexB]) {
      merged.push(arrB[indexB]);
      indexB++;
    } else {
      merged.push(arrA[indexA]);
      indexA++;
    }
  }
  return merged;
}
