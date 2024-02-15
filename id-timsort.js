
function idTimsort(arr) {
    let sorted = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        sorted[val - 1] = val;
    }
    return sorted;
}

let randomArr = Array.from({length: 100}, (_, i) => i + 1);
randomArr.sort(() => Math.random() - 0.5); // Commented during sorted test
let randomArrA = randomArr.slice();
let randomArrB = randomArr.slice();

console.time('timer1');
let sorted = idTimsort(randomArr);
console.log(sorted);
console.timeEnd('timer1');

console.time('timer1');
let sorted2 = randomArrB.sort((a, b) => a - b);
// console.log(sorted2);
console.timeEnd('timer1');

// Was sorting algorithm successful?
console.log(sorted.every((e, i) => e === randomArrB[i]));


// test        : random   sorted
// idTimsort   : 97.572ms 39.783ms
