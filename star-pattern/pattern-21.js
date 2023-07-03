`
        1 
      2 2 
    3 3 3 
  4 4 4 4 
`

const n = 3

for (let i = 0; i <= n; i++) {
    let result = ''
    for (let j = 0; j <= n - i; j++) {
        result += '  '
    }
    for (let z = n - i; z <= n; z++) {
        result += i + 1 + " "
    }
    console.log(result);
}