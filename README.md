# sorting-algorithms
Welcome to the Sorting Algorithms repository! This repository is dedicated to demonstrating and experimenting with various sorting algorithms and techniques. Whether you're a student, educator, researcher, or programming enthusiast, you'll find valuable resources here to understand the intricacies of sorting algorithms, their implementations, comparisons, and optimizations.

**This repository aims to:**
 - Demonstrate classic and modern sorting algorithms.
 - Experiment with different techniques to understand their performance implications.
 - Educate on the theoretical and practical aspects of sorting algorithms.
 - Engage the community to contribute by adding more algorithms, optimizations, and comparative analyses.

**Getting Started:**
To get started with the Sorting Algorithms repository, you'll need to have a basic development environment set up for the language(s) of your interest. For most algorithms, any standard environment with support for the language should suffice.
```
git clone https://github.com/TheCyberLocal/sorting-algorithms.git
```


**Usage:**
You can use the code in this repository to:
 - Learn about sorting algorithms by reading the code and accompanying explanations.
 - Run the algorithms to see them in action and understand their behavior with different datasets.
 - Modify the algorithms to experiment with optimizations or variations.


```js
// adjust experimental array size to your machine if needed
let randomArr = Array.from({length: 10000000}, (_, i) => i + 1);
randomArr.sort(() => Math.random() - 0.5); // Commented during sorted test
let randomArrA = randomArr.slice();
let randomArrB = randomArr.slice();

console.time('timer1');
let sorted = customSort(randomArrA);
// console.log(sorted);
console.timeEnd('timer1');

console.time('timer1');
let sorted2 = randomArrB.sort((a, b) => a - b);
// console.log(sorted2);
console.timeEnd('timer1');

// Was sorting algorithm successful?
console.log(sorted.every((e, i) => e === randomArrB[i]));
```

**Time Tested Results:**
| array input    | random  | sorted  |
| -------------- | ------- | ------- |
| **out of place sorting methods** |
| Mergesort | 10.39s  | 10.10s  |
| Quicksort | 10.27s  | CRASH   |
| Sort ID | 97.57ms | 39.78ms |
| **in place sorting methods** |
| Heapsort | 4.145s  | 2.183s  |
| Sort method | 3.029s  | 154ms   |
| QS Lomuto | 1.240s  | CRASH   |
| QS Hoare | 1.149s  | 324ms   |
