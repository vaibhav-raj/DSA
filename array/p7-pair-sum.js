//! link : https://www.codingninjas.com/studio/problems/pair-sum_697295

`
PROBLEM STATEMENT

`

const arr = [2, - 3, 3, 3, - 2]
const target = 0

//approach-1
function pairSum(arr, target) {

    const n = arr.length

    const result = []
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                const temp = []
                temp.push(Math.min(arr[i], arr[j]))
                temp.push(Math.max(arr[i], arr[j]))
                result.push(temp)
            }
        }
    }
    return result.sort((a, b) => a[0] - b[0]);
}


//approach-2
function pairSum(arr, target) {

}
console.log(pairSum(arr, target));