`
1 2 3
4 5 6
7 8 9
`

const n = 3

let count = 1
for (let i = 1; i <= n; i++) {
    let result = ''
    for (let j = 1; j <= n; j++) {
        result += count + " "
        count++
    }
    console.log(result);
}