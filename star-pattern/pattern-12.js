`
A B C
D E F
G H I
`

const n = 3
for (let i = 0; i < n; i++) {
    let result = ''

    for (let j = 0; j < n; j++) {
        const char = String.fromCharCode(65 + i + j)
        result += char + " "

    }
    console.log(result);
}