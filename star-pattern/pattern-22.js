`
1 2 3 4
  2 3 4
    3 4
      4
`

const n = 3

for (let i = 0; i <= n; i++) {
    let result = ''

    for (let j = 0; j <= i - 1; j++) {
        result += '  '
    }

    for (let z = i; z <= n; z++) {
        result += z + 1 + " "
    }


    console.log(result);
}