---
templateKey: blog-with-video-post
title: Selection sort, another simple sorting algorithm.
date: 2023-06-15T15:04:10.000Z
description: What are we selecting here? Why is it called selection sort?
video: https://www.youtube.com/embed/G7KJ1f_RTF4
featuredpost: true
featuredimage: /img/ariel-oal07ai4otk-unsplash.jpg
tags:
  - algorithms
  - sorting
---
# Another O(n^2) sorting algorithm

Selection sort is another simple sorting algorithm that works by growing a subset of either largest numbers or smallest numbers. 

As the name suggests the algorithm works by making selections. You pass over elements and keep a reference of largest one. Once you reach the end of unsorted portion of array, you swap the last element with the largest element seen. 

Now that largest element is at it's correct position, therefore there is no need of again checking this element. Hence you reduce your each iteration by one.
### Time complexity
Quadratic time O(n^2)
#### Code
```javascript

//Selection sort maintains and grows a subset the largest i items in sorted order
function selctionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = i;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[maxIndex]) {
        maxIndex = j;
      }
    }
    let temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[maxIndex];
    arr[maxIndex] = temp;
  }
  return arr;
}

console.log(selctionSort([6, 5, 1, 2, 3]));
console.log(selctionSort([0, 5, 2, 3, 4, 1, -1]));

```