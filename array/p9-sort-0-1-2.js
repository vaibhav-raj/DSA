//! link : https://www.codingninjas.com/studio/problems/sort-0-1-2_631055
`
PROBLEM STATEMENT

`

const arr = [1, 0, 1, 2, 2, 1, 0, 1]

//approach-1
function sort(arr) {
    return arr.sort((a, b) => a - b);
}


// approach-2 : Dutch National Flag algorithm
function sort(arr) {

    let low = 0;
    let mid = 0
    let high = arr.length - 1

    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++
        } else if (arr[mid] == 1) {
            mid++
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--
        }
    }
    return arr
}


console.log(sort(arr));