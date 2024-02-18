function quicksort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  const pivot = arr[0];

  // Orient the pivot so that...
  let left = arr.filter(e => e < pivot);
  let right = arr.filter(e => e > pivot);

  // Recursively sort the left and right
  left = quicksort(left);
  right = quicksort(right);

  // Return the left, pivot, and right in sorted order
  return [...left, pivot, ...right];
}
