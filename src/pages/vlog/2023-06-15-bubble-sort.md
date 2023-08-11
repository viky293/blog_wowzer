---
templateKey: blog-with-video-post
title: What is bubble sort?
date: 2023-06-15T15:04:10.000Z
description: simple sorting algorithm
featuredpost: false
featuredimage: /img/soda-bubbles-analogy-for-bubble-sort.jpg
video: https://www.youtube.com/embed/I3v1orosIxE
tags:
  - algorithms
  - sorting
---
##
## An analogy

One of the easiest way to remember bubble sort is to think about what happens when you drop a heavy object in to glass of soda. There are bubbles while the heavy object goes and rests at the bottom. \

<!-- ![Bubble sort analogy with soda bubbles](/img/soda-bubbles-analogy-for-bubble-sort.jpg "Bubble Sort") -->
Bubble sort is one of the most simplest sorting algorithm where, you keep comparing the two consecutive items to one another and if they don't seem to be in their right place, i.e first item is bigger than the second item then you swap them and move one step forward. 

As a result of this operation the biggest element would be pushed at the end of the array, hence the second iteration should not require a full scan of array. 

You can reduce the length of array scan by one at every iteration.
### Time complexity
Quadratic time O(n^2)
#### Code

```javascript
function bubbleSort(unsortedArr:number[]):number[]{
    for(let i=0;i<unsortedArr.length-1;i++){
        for(let j=0;j<unsortedArr.length-1-i;j++){
            if(unsortedArr[j+1]<unsortedArr[j]){
                let temp = unsortedArr[j];
                unsortedArr[j]=unsortedArr[j+1];
                unsortedArr[j+1]=temp;
            }
        }
    }
    return[...unsortedArr];
}
console.log(bubbleSort([9,8,7,6,2,3,1,4,5]));

```