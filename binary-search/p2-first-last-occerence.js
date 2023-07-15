// ! link : https://www.codingninjas.com/studio/problems/first-and-last-position-of-an-element-in-sorted-array_1082549

// First and Last Position of an Element In Sorted Array

const k = 5
const arr = [0, 5, 5, 5, 6, 6]


function firstAndLastPosition(arr, k) {

    firstOccIndex = firstOcc(arr, k)
    lastOccIndex = lastOcc(arr, k)

    return [firstOccIndex, lastOccIndex]

}


function firstOcc(arr, k) {

    let start = 0
    let end = arr.length
    let mid = Math.floor(start + (end - start) / 2)

    ans = -1

    while (start <= end) {
        if (arr[mid] == k) {
            ans = mid
            end = mid - 1
        }
        else if (k < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor(start + (end - start) / 2)
    }
    return ans
}
function lastOcc(arr, k) {

    let start = 0
    let end = arr.length
    let mid = Math.ceil(start + (end - start) / 2)

    ans = -1

    while (start <= end) {

        if (arr[mid] == k) {
            ans = mid
            start = mid + 1
        }
        else if (k < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

        mid = Math.ceil(start + (end - start) / 2)
    }
    return ans
}
console.log(firstAndLastPosition(arr, k))

