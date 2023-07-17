// ! link : https://leetcode.com/problems/peak-index-in-a-mountain-array/

const arr = [0, 4, 5, 6, 7, 1]

function peak(arr) {

    let start = 0;
    let end = arr.length
    let mid = Math.floor(start + (end - start) / 2)

    while (start < end) {

        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        } else {
            end = mid
        }

        mid = Math.floor(start + (end - start) / 2)
    }

    return mid

}

console.log(peak(arr))