//! link : https://www.codingninjas.com/studio/problem-details/duplicate-in-array_893397

`
PROBLEM STATEMENT
You are given an array ‘ARR’ of size ‘N’ containing each number between 1 and ‘N’ - 1 at least once. There is a single integer value that is present in the array twice. Your task is to find the duplicate integer value present in the array.

For example:

Consider ARR = [1, 2, 3, 4, 4], the duplicate integer value present in the array is 4. Hence, the answer is 4 in this case.
Note :
A duplicate number is always present in the given array.
`

const array = [1, 2, 3, 4, 4]

//approach-1
function findDuplicate(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }

    for (const key in obj) {
        if (obj[key] === 2) {
            return key;
        }
    }

}

//approach-2
function findDuplicate(arr) {

    const n = arr.length
    let ans = 0

    // XOR ing all array elements
    for (let i = 0; i < n; i++) {
        ans = ans ^ arr[i]
    }

    // XOR [1,n-1]
    for (let i = 0; i < n; i++) {
        ans = ans ^ i
    }

    return ans
}

console.log(findDuplicate(array));