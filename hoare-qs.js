function medianOfThree(arr, left, right) {
    const mid = Math.floor((left + right) / 2);
    // Find the median of arr[left], arr[mid], arr[right]
    if ((arr[left] - arr[mid]) * (arr[right] - arr[left]) >= 0) {
        return arr[left];
    } else if ((arr[mid] - arr[left]) * (arr[right] - arr[mid]) >= 0) {
        return arr[mid];
    } else {
        return arr[right];
    }
}

// * Improved Partition Function (Hoare Partition Scheme)
function partition(arr, left, right) {
    const pivot = medianOfThree(arr, left, right);
    let i = left - 1; // Start pointer just before the left end
    let j = right + 1; // Start pointer just after the right end

    while (true) {
        // Move in from the left until finding an element greater than or equal to the pivot
        do {
            i++;
        } while (arr[i] < pivot);

        // Move in from the right until finding an element less than or equal to the pivot
        do {
            j--;
        } while (arr[j] > pivot);

        // If the pointers have crossed, return the end pointer
        if (i >= j) {
            return j;
        }

        // Swap the elements at the pointers
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    // Only proceed if there are at least two elements to sort.
    if (low < high) {
        // Partition the array and get the pivot's final index.
        let pivotIndex = partition(arr, low, high);

        // Recursively apply QuickSort to the sub-array to the left of the pivot.
        // ! Adjusted from Lomuto to ensure elements are not skipped or redundantly sorted
        quickSort(arr, low, pivotIndex);
        // Recursively apply QuickSort to the sub-array to the right of the pivot.
        quickSort(arr, pivotIndex + 1, high);
    }
    // Return the sorted array.
    return arr;
}


let randomArr = Array.from({length: 10000000}, (_, i) => i + 1);
randomArr.sort(() => Math.random() - 0.5); // Commented during sorted test
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
