
// ! link : https://www.codingninjas.com/studio/problems/occurrence-of-x-in-a-sorted-array_630456
// total number of occurrences

const k = 6
const arr = [0, 5, 5, 5, 6, 6]

function firstAndLastPosition(arr, k) {

    firstOccIndex = firstOcc(arr, k)
    lastOccIndex = lastOcc(arr, k)

    totalOccurrences = lastOccIndex - firstOccIndex + 1
    return totalOccurrences

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

