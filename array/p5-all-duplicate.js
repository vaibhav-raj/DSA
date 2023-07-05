//! link : https://leetcode.com/problems/find-all-duplicates-in-an-array/

`
PROBLEM STATEMENT
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:
Input: nums = [1,1,2]
Output: [1]

Example 3:
Input: nums = [1]
Output: []
`

const array = [4, 3, 2, 7, 8, 2, 3, 1]

approach - 1
function findDuplicates(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }

    let ans = []

    for (const key in obj) {
        if (obj[key] > 1) {
            ans.push(key);
        }
    }

    return ans
}


//approach-2
function findDuplicates(arr) {

    const obj = {};

    return arr.filter(num => {
        obj[num] = (obj[num] || 0) + 1;

        return obj[num] > 1;
    })

}



console.log(findDuplicates(array));