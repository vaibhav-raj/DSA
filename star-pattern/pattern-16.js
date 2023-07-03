`
D
C D
B C D
A B C D
`

const n = 3

for (let i = 0; i <= n; i++) {
    let result = ''


    let startChar = (65 + n - i)
    for (let j = 0; j <= i; j++) {
        const char = String.fromCharCode(startChar)
        result += char + " "
        startChar++
    }
    console.log(result);
}