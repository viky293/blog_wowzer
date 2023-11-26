---
templateKey: blog-with-video-post
title: Heaps and Heap Sort
date: 2023-11-26T12:35:37.001Z
description: >
  Let's understand what is a heap and how can we use it to implement a sorting
  algorithm.
video: https://www.youtube.com/embed/onaCEAHS37A?si=JYjo3DtemxxNWme0
featuredpost: true
featuredimage: /img/firefly-generated-banner-learning-technology.jpg
tags:
  - dsa
  - heapsort
  - javascript
  - sorting
---
<!--StartFragment-->

\
Heap sort is an efficient sorting algorithm that belongs to the family of comparison sorts. It is based on the idea of maintaining a heap data structure, which is a tree-based data structure that satisfies the heap property: in a max heap, the value of each parent node is greater than or equal to the values of its children; in a min heap, the value of each parent node is less than or equal to the values of its children.

The heapsort algorithm works by first building a max heap out of the input array. Then, it repeatedly removes the largest element from the heap and places it in its correct position in the sorted output array. The heap is then rebuilt after each removal, so that the largest remaining element is always at the root of the heap.

Here is an example of how heapsort works:

#### Code

```javascript
function heapsort(array) {
  // Build a max heap out of the input array
  buildMaxHeap(array);

  // Sort the array
  for (let i = array.length - 1; i > 0; i--) {
    // Remove the largest element from the heap and place it in its correct position in the sorted output array
    swap(array\[0], array\[i]);
    heapify(array, 0, i);
  }
}
```
The `buildMaxHeap` function takes an array as input and builds a max heap out of it. The `heapify` function takes an array, an index, and a heap size as input and maintains the heap property for the subtree rooted at the index.

Heap sort is an efficient sorting algorithm that has an average time complexity of O(n log n) and a worst-case time complexity of O(n log n). It is a versatile algorithm that can be used to sort a variety of data types. 
<!--EndFragment-->

#### Code

```javascript

```