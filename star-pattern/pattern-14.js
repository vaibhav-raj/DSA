`
A
B C
D E F
G H I F
`

const n = 3
count = 0
for (let i = 1; i <= n; i++) {
    let result = ''

    for (let j = 1; j <= i; j++) {
        const char = String.fromCharCode(65 + count)
        result += char + " "
        count++

    }
    console.log(result);
}