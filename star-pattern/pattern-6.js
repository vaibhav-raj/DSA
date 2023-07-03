`
1
2 2
3 3 3 
4 4 4 4
`

const n = 4

for (let i = 1; i <= n; i++) {
    let result = ''
    for (let j = 1; j <= i; j++) {
        result += i + " "
    }
    console.log(result);
}