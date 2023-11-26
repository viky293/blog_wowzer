---
templateKey: blog-with-video-post
title: "Count Sort: A Simple and Efficient Sorting Algorithm"
date: 2023-11-26T13:58:56.993Z
description: |
  Understanding what counting sort or count sort is. Stable sorting algorithm.
video: https://www.youtube.com/embed/VncXVAA_q9I?si=vsPm7iiiFxxum4Kl
featuredpost: true
featuredimage: /img/screenshot-2023-08-20-185103.png
tags:
  - dsa
  - countsort
  - javascript
  - sorting
---

Count sort is a sorting algorithm that works on a range bound inputs. It is a stable sorting algorithm, which means that it preserves the order of equal elements. The algorithm works by counting the number of times each element appears in the input array, and then using this information to place each element in its correct position in the output array.



Here is an example of how to implement count sort in JavaScript:

#### Code

```javascript
//[0,9]
function countSort(arr, min, max) {
    //Build the frequency counter
    //

    let freq = [];
    for (let i = min; i <= max; i++) {
        freq[i] = 0;
    }
    //Building frequency counter
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++;
    }
    //Build cumulatice frequency
    for(let i = 1;i<freq.length;i++){
        freq[i]+=freq[i-1];
    }
    //Build the sorted Array
    let sortedArr = [];
    for(let i = arr.length-1;i>=0;i--){
        let currentElement = arr[i];
        let pos = freq[currentElement]-1;
        sortedArr[pos]=currentElement;
        freq[currentElement]--;
    }
    return sortedArr;
}

console.log(countSort([7,7,2,2,1,1,3,3,8,0],0,9));
```