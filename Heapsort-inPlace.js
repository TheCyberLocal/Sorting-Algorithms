function heapSort(array) {
    const n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];

        // Call max heapify on the reduced heap
        heapify(array, i, 0);
    }
}

function heapify(array, size, rootIndex) {
    let largest = rootIndex; // Initialize largest as root
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;

    // If left child is larger than root
    if (left < size && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < size && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== rootIndex) {
        // Swap
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];

        // Recursively heapify the affected sub-tree
        heapify(array, size, largest);
    }
}
