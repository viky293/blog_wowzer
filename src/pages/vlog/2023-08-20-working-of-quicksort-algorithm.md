---
templateKey: blog-with-video-post
title: Working of Quicksort algorithm
date: 2023-08-20T13:03:12.534Z
description: Divide and conquer algorithm
video: https://www.youtube.com/embed/PlDwq8vrqB4
featuredpost: true
featuredimage: /img/people-standing-in-queue.jpg
---
Quicksort is really a family of algorithms, there are so many different variations. The basic idea here is to find the sorted position of one element at time. 

What we want to do in each pass is that a chosen number is placed to a position such that, all the numbers ahead of it are smaller than it and all the numbers behind it are greater. 

#### First Approach
One of the simplest approach (more commonly taught) is to have a left pointer and right pointer at the starting and end of the array and choosing last or first element as the pivot index. 
Quicksort if a recursive algorithm, where we stop when the array cannot be further partitioned.

![](/img/screenshot-2023-08-20-185103.png)

We start comparing from the left and right side of the array. From the right side we stop whenever we see a number smaller than the pivot and from the left side we stop whenever we see a greater number than pivot. 

Then we swap the numbers at left and right pointer, so that we accumulate all the smaller elements towards the left side and greater elements towards the right hand side. 

And then once both the pointers are at same position we stop and verify if the value is greater then pivot or not, if yes then we swap it with the pivot. 

This way we end up finding sorted position for the pivot. In certain corner cases with this approach you can end up in a situation where left pointer and right pointer stop at a number which is lower than pivot. 

In that case you don't swap the ending position with pivot and pivot stays at the same position. 

Once the left pointer and right pointer are at same position, let's say at position X.
We partition the array in two parts, one that's towards the left including X [StartingOfArray,X] and another whatever is on the right side excluding X (X,EndOfArray].

If there's only one element left then the partions are not possible and we return from the recursive calls. 

#### Second Approach
There is second way of implementation where you can have pointers at the same side. One keeps a track of last seen smaller element and one keeps parsing the array.

This approach is like sending a person towards pivot, who tells each smaller guy to swap with an X+1 position person. 

X is something that another person is keeping track of.
```
      X    *
1,2,3,4,89,5,2,90
0 1 2 3 4  5 6 7

swap element at * with X + 1, X++
```
- At * person moving towards pivot finds a smaller number
- Another person keeps a track of the position of last seen smaller number, in the scanned part of array(X = 4). 
- Hence person at * is asked to swap with person at X+1
- Therefore the value of X is increased by 1 X = X+1

```

            X  *
1,2,3,4,5,2 89,90
0 1 2 3 4  5 6 7

Once reached end of array, swap pivot with X+1

```
### Time complexity

Logarithmic time O(n*log(n))

#### Code
```javascript
//Uses first approach of two seprate left and right pointers
function quickSort(arr,lowIndex,highIndex){
    if(lowIndex>=highIndex){
        return arr;
    }
    let leftPtr = lowIndex;
    let rightPtr = highIndex-1;
    let pivotIndex = highIndex;

    function swap(l,r){
        let tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
    }
    while(rightPtr != leftPtr){
        while(arr[rightPtr]>arr[pivotIndex] && (rightPtr !=leftPtr)){
            rightPtr--;
        }
        while(arr[leftPtr]<arr[[pivotIndex]] && (rightPtr !=leftPtr)){
            leftPtr++;
        }
        swap(rightPtr,leftPtr);
    }
    if(arr[leftPtr]>arr[pivotIndex]){
        swap(leftPtr,pivotIndex);
    }
    quickSort(arr,lowIndex,leftPtr);
    quickSort(arr,leftPtr+1,highIndex);

    return arr;
}

console.log(quickSort([2,1,4,9,5,6],0,5));
```