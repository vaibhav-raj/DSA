`     1

`

const n = 3
let count = 1

for (let i = 0; i <= n; i++) {
    let result = ''

    for (let j = n - i; j >= 0; j--) {
        result += '  '
    }

    for (let z = 0; z <= i; z++) {
        result += z + 1 + " "
    }

    for (let k = i; k > 0; k--) {
        result += k + " "
    }


    console.log(result);
}