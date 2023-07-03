`
1 1 1 1
  2 2 2
    3 3
      4
`

const n = 3

for (let i = 0; i <= n; i++) {
    let result = ''
    for (let j = 0; j <= i; j++) {
        result += '  '
    }
    for (let z = 0; z <= n - i; z++) {
        result += i + 1 + " "
    }
    console.log(result);
}