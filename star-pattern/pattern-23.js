`     1
    2 3 
  4 5 6
7 8 9 10
`

const n = 3
let count = 1

for (let i = 0; i <= n; i++) {
    let result = ''

    for (let j = 0; j <= n - i; j++) {
        result += '  '
    }

    for (let z = n - i; z <= n; z++) {
        result += count++ + " "
    }


    console.log(result);
}