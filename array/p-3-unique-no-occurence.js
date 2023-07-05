// ! link : https://leetcode.com/problems/unique-number-of-occurrences/


`
Problem Statement:
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
`

const array = [1, 2, 2, 1, 1, 3]

//approach -1
function uniqueOccurrences(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }

    const frequencies = Object.values(obj)
    const set = new Set(frequencies)

    return frequencies.length === set.size
}

console.log(uniqueOccurrences(array))

