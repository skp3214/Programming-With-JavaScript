// Task 1: Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("Bubble sorted array:", arr);
}

// Task 2: Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    console.log("Selection sorted array:", arr);
}

// Task 3: Quicksort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort([...arr]);
selectionSort([...arr]);
console.log("Quicksort sorted array:", quickSort([...arr]));

// Task 4: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Linear search: Target found at index", i);
            return i;
        }
    }
    console.log("Linear search: Target not found");
    return -1;
}

// Task 5: Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log("Binary search: Target found at index", mid);
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    console.log("Binary search: Target not found");
    return -1;
}

// Example usage for Activity 2
const sortedArr = [11, 12, 22, 25, 34, 64, 90];
linearSearch(sortedArr, 25);
binarySearch(sortedArr, 25);

// Task 6: Count character occurrences
function countCharacters(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log("Character counts:", charCount);
    return charCount;
}

// Task 7: Longest substring without repeating characters
function longestSubstring(str) {
    let longest = 0;
    let start = 0;
    const seen = new Map();

    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            start = Math.max(start, seen.get(str[i]) + 1);
        }
        seen.set(str[i], i);
        longest = Math.max(longest, i - start + 1);
    }

    console.log("Length of longest substring without repeating characters:", longest);
    return longest;
}

// Example usage for Activity 3
countCharacters("hello world");
longestSubstring("abcabcbb");

// Task 8: Rotate array
function rotateArray(arr, k) {
    k = k % arr.length;
    const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
    console.log("Rotated array:", rotated);
    return rotated;
}

// Task 9: Merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    console.log("Merged sorted array:", merged);
    return merged;
}

// Example usage for Activity 4
rotateArray([1, 2, 3, 4, 5], 2);
mergeSortedArrays([1, 3, 5], [2, 4, 6]);

