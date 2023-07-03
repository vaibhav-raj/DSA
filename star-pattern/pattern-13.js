`
A
B B
C C C
`

const n = 3
for (let i = 1; i <= n; i++) {
    let result = ''
    const char = String.fromCharCode(65 + i - 1)

    for (let j = 1; j <= i; j++) {
        result += char + " "

    }
    console.log(result);
}