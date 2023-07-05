const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    `case -1
    input: array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expected o / p : [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
    case -2
    input: array = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
    expected o / p : [2, 1, 4, 3, 6, 5, 8, 7, 9]
    `


for (let i = 0; i < array.length; i += 2) {

    if (i + 1 < array.length) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
    }


}
console.log(array);