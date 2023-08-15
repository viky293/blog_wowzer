---
templateKey: blog-with-video-post
title: What is merge sort?
date: 2023-08-15T17:52:26.238Z
description: "Works on the principle of divide and conquer "
video: https://www.youtube.com/embed/TfXyztFWN8s
featuredpost: false
featuredimage: /img/firefly-programming-interface-95893.jpg
tags:
  - algorithms
  - sorting
---
## Recursive merge sort

Works on the principle of divide and conquer.
You split the array in sub arrays, until you can't further divide.
Then a merge between two arrays is performed to produce a sorted array.

Merge sort algorithm is a recursive algorithm.
The terminal condition is if there is only 1 elment in the array.

Once you have left sub array and right subarray.
Create an empty array to hold sorted merged array.
Then you compare first elements of left and right sub array.
Take the smaller one and delete it from the original array.
Insert this into the newly created merged array.
Keep repeating until one of the sub array has no more elements.
From other sub array which still has some elements,
append the leftovers to the end of merged array.

### Time complexity

Logarithmic time O(n*log(n))

#### Code

```javascript
funcfunction merge_sort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  let leftArr = [];
  let rightArr = [];
  leftArr = merge_sort(arr.splice(0, mid));
  rightArr = merge_sort(arr);
  return merge(leftArr, rightArr);
}

function merge(leftArr: number[], rightArr: number[]): number[] {
  let mergedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      mergedArr.push(leftArr.shift() as number);
    } else {
      mergedArr.push(rightArr.shift() as number);
    }
  }
  // console.log(`Merged = ${[...mergedArr, ...rightArr, ...leftArr]}`);
  return [...mergedArr, ...rightArr, ...leftArr];
}

function merge_sort_2(
  arr: number[],
  l: number = 0,
  r: number = arr.length
): number[] {
  let merged_arr: number[] = [];
  let m = Math.floor((l + r) / 2);
  // console.log(`left = ${l}  mid = ${m} right= ${r} `);
  if (l >= r) {
    return arr.slice(l, r + 1);
  }
  let leftArr = merge_sort_2(arr, l, m);
  let rightArr = merge_sort_2(arr, m + 1, r);
  // console.log(
  //   `arr = ${arr} ( Left -> ${leftArr} )  ----- ( Right -> ${rightArr} )`
  // );
  return merge(leftArr, rightArr);
}

console.log(merge_sort([16,1, 5, 4, -1, 0, 0, 3, 1, 2, 1]));
console.log(merge_sort_2([16,1, 5, 4, -1, 0, 0, 3, 1, 2, 1]));
```