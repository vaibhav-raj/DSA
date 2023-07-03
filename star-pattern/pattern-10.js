`
A A A
B B B
C C C
`

const n = 3
for (let i = 0; i < n; i++) {
    let result = ''
    const char = String.fromCharCode(65 + i)

    for (let j = 0; j < n; j++) {
        result += char + " "

    }
    console.log(result);
}