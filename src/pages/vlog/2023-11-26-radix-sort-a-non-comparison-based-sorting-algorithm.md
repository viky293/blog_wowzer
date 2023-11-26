---
templateKey: blog-with-video-post
title: "Radix Sort: A Non-Comparison Based Sorting Algorithm"
date: 2023-11-26T14:05:04.189Z
description: |
  Understanding what radix sort. Stable sorting algorithm.
video: https://www.youtube.com/embed/JxeTR6D_3Vo?si=SbrBQtj2kXp5jT0n
featuredpost: true
featuredimage: /img/flavor_wheel.jpg
tags:
  - dsa
  - radixsort
  - javascript
  - sorting
---

Radix sort is a non-comparison based sorting algorithm that is similar to count sort. It has a linear time complexity and can be used to sort any type of data, including integers, strings, and floating-point numbers.

Some of the key takeaways from the video:

- Radix sort is a non-comparison based sorting algorithm.
 
- Radix sort has a linear time complexity.
- Radix sort can be used to sort any type of data.
- Radix sort is a very efficient sorting algorithm.
- Radix sort is a stable sort, that mean the order or equal elements is preserved. 

The time complexity of radix sort is O(n * k), where n is the number of elements in the array and k is the number of digits in the largest number. This means that the time complexity of radix sort is linear in the number of elements in the array and the number of digits in the largest number.

#### Code

```javascript
//[0,9]
//1,10,100
function countSort(arr,exp) {
    //Build the frequency counter
    //

    let freq = [];
    for (let i = 0; i <=9; i++) {
        freq[i] = 0;
    }
    //Building frequency counter
    for (let i = 0; i < arr.length; i++) {
        let rightDigit = parseInt(arr[i]/exp)%10;
        freq[rightDigit]++;
    }
    //Build cumulative frequency
    for(let i = 1;i<freq.length;i++){
        freq[i]+=freq[i-1];
    }
    //Build the sorted Array
    let sortedArr = [];
    for(let i = arr.length-1;i>=0;i--){
        let rightDigit = parseInt(arr[i]/exp)%10; 
        let pos = freq[rightDigit]-1;
        sortedArr[pos]=arr[i];
        freq[rightDigit]--;
    }
    return sortedArr;
}

function radixSort(arr){
    let max;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max || typeof max ==='undefined'){
            max = arr[i];
        }
    }
    let exp = 1;
    while(parseInt(max/exp)>0){
        arr = countSort(arr,exp);
        exp*=10;
    }
    return arr;
}
console.log(radixSort([7,7,2,2,1,1,3,3,8,0]));
console.log(radixSort([98,1,10,0,22,31,8,7,7,100]));

```