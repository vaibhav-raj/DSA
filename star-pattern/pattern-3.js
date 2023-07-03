`
1 2 3 4 
1 2 3 4 
1 2 3 4 
1 2 3 4 
`

const n = 5

for (let i = 1; i < n; i++) {
    let result = ''
    for (let j = 1; j < n; j++) {
        result += j + " "
    }
    console.log(result);
}