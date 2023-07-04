// ! link : https://www.codingninjas.com/studio/problems/find-unique_625159


`
Problem Statement:

You have been given an integer array / list(ARR) of size N.Where N is equal to[2M + 1].
Now, in the given array / list, 'M' numbers are present twice and one number is present only once.You need to find and return that number which is unique in the array / list.

`

const array = [3, 7, 2, 2, 7, 3, 4]

//approach -1
function findUnique(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }

    for (const key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }

}

//approach -2
function findUnique(arr) {
    let obj = {}
    let unique

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
            unique = arr[i]
        }
    }
    return unique

}

//approach -3
function findUnique(arr) {

    let ans = 0
    for (let i = 0; i < arr.length; i++) {
        ans = ans ^ arr[i]
    }
    return ans

}

console.log(findUnique(array))

