//! link : https://www.codingninjas.com/studio/problems/intersection-of-2-arrays_1082149

`
PROBLEM STATEMENT

`

const arr1 = [1, 3, 4, 5, 7]
const arr2 = [2, 3, 5, 6]

//approach-1
function findIntersection(arr1, arr2) {



    const n = arr1.length
    const m = arr2.length
    const ans = []


    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {
            if (arr1[i] === arr2[j]) {
                ans.push(arr1[i])
                arr2[j] = -5321351  //IntMIN
                break
            }

        }

    }

    return ans
}

// approach - 2
function findIntersection(arr1, arr2) {

    let i = 0;
    let j = 0

    const n = arr1.length
    const m = arr2.length
    const ans = []

    while (i < n && j < m) {

        if (arr1[i] === arr2[j]) {
            ans.push(arr1[i])
            i++
            j++
        } else if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }

    }

    return ans
}



console.log(findIntersection(arr1, arr2));