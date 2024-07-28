// Activity 1: Basic Recursion

// Task 1: Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));

// Task 2: Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("5th Fibonacci number:", fibonacci(5));
console.log("10th Fibonacci number:", fibonacci(10));

// Activity 2: Recursion with Arrays

// Task 3: Sum of array elements
function arraySum(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + arraySum(arr, index + 1);
}
console.log("Sum of [1,2,3,4,5]:", arraySum([1,2,3,4,5]));

// Task 4: Maximum element in array
function arrayMax(arr, index = 0) {
    if (index === arr.length - 1) return arr[index];
    return Math.max(arr[index], arrayMax(arr, index + 1));
}
console.log("Max of [3,7,2,9,1]:", arrayMax([3,7,2,9,1]));

// Activity 3: String Manipulation with Recursion

// Task 5: Reverse string
function reverseString(str) {
    if (str === "") return "";
    console.log(str)
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log("Reverse of 'hello':", reverseString("hello"));

// Task 6: Check palindrome
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));

// Activity 4: Recursive Search

// Task 7: Binary search
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}
console.log("Index of 5 in [1,3,5,7,9]:", binarySearch([1,3,5,7,9], 5));

// Task 8: Count occurrences
function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) return 0;
    return (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
}
console.log("Occurrences of 2 in [1,2,2,3,2,4]:", countOccurrences([1,2,2,3,2,4], 2));

// Activity 5: Tree Traversal (Optional)

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Task 9: In-order traversal
function inOrderTraversal(root) {
    if (!root) return;
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);
}

// Task 10: Tree depth
function treeDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(treeDepth(root.left), treeDepth(root.right));
}

// Test tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("In-order traversal:");
inOrderTraversal(root);
console.log("Tree depth:", treeDepth(root));