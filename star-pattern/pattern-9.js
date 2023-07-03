`
1
2 1
3 2 1
4 3 2 1
`

const n = 5
for (let i = 1; i <= n; i++) {
    let result = ''

    for (let j = 1; j <= i; j++) {
        result += i - j + 1 + " "

    }
    console.log(result);
}