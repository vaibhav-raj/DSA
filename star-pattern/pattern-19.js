`
* * * *   
* * *     
* *       
*    
`

const n = 3

for (let i = 0; i <= n; i++) {
    let result = ''
    for (let j = 0; j <= i; j++) {
        result += '  '
    }
    for (let z = 0; z <= n - i; z++) {
        result += ' *'
    }
    console.log(result);
}