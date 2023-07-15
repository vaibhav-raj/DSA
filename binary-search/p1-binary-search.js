const k = 5
const arr = [0, 5, 5, 6, 6, 6]

function binarySearch(arr, k) {

    let start = 0;
    let end = arr.length
    let mid = start + (end - start) / 2

    while (start <= mid) {
        if (arr[mid] == k) {
            return mid
        }

        if (k < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

        mid = start + (end - start) / 2
    }
    return -1
}

console.log(binarySearch(arr, k))