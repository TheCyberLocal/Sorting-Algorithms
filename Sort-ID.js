
function idSort(arr) {
    let sorted = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        sorted[val - 1] = val;
    }
    return sorted;
}
