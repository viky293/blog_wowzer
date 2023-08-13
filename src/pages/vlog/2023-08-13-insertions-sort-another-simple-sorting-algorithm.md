---
templateKey: blog-with-video-post
title: Insertion sort, another simple sorting algorithm
date: 2023-08-13T15:34:46.504Z
description: We sort by picking one element at a time from unsorted portion and
  insert it between a smaller & greater one in the sorted portion.
video: https://www.youtube.com/embed/ecIUbl1wczk
featuredpost: false
featuredimage: /img/products-grid1.jpg
tags:
  - algorithms
  - sorting
---
# Another O(n^2) sorting algorithm

Insertion sort is another simple sorting algorithm. An analogy that can be used to remember how insertion sort works is.

A person is given a task to arrange people in a queue in ascending order of their heights.

This coordinator picks a person from (i)th position and tries to find their correct position.
A correct position is where person ahead in the queue is shorter and taller is behind or all taller are behind (in the scanned / sorted portion of queue). 

Starts compairing with others while moving towards the start of the queue. If a taller person is found, you ask the person to move back on step.
You move to the next person(towards starting of queue) and do the same checks.
If the person is shorter, then the person who was picked to be inserted is placed immediately after where shorter person is found.

i starts from second position, or in case of array indexes i start from 1 and goes till end of queue or length or array.

As the name suggests the algorithm works by making insertions between smaller and larger numbers. You pass over elements and keep a  copy of selected one, keep shifting bigger numbers towards right. Once you reach the starting of array or find smaller number you insert the copied number either in between the smaller and bigger number or at the begining of array. 

Now that largest element is at it's correct position, therefore there is no need of again checking this element. Hence you reduce your each iteration by one.

### Time complexity

Quadratic time O(n^2)

#### Code

```javascript
//Insertion sort maintains and grows the subset for first i input items in sorted order.
function insertionSort(unsortedArr:number[]):number[]{
    for(let i=1; i<unsortedArr.length;i++){
        let j=i-1;
        let key = unsortedArr[i];
        while(j>=0 && unsortedArr[j]>key){
            unsortedArr[j+1]=unsortedArr[j];
            j--;
        }
        unsortedArr[j+1]=key;
    }
    return [...unsortedArr];
}

console.log(insertionSort([9,8,7,6,2,3,1,4,5]));
```