`
1
2 3
3 4 5 
4 5 6 7
5 6 7 8 9
`

const n = 5
for (let i = 1; i <= n; i++) {
    let result = ''

    for (let j = 1; j <= i; j++) {
        result += i + j - 1 + " "

    }
    console.log(result);
}