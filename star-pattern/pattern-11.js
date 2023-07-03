`
A B C
A B C
A B C
`

const n = 3
for (let i = 0; i < n; i++) {
    let result = ''

    for (let j = 0; j < n; j++) {
        const char = String.fromCharCode(65 + j)
        result += char + " "

    }
    console.log(result);
}