// ! triangle
/*
* * * * * * 
* * * * * 
* * * * 
* * * 
* * 
* 

*/

const n = 6

for (let i = 0; i < n; i++) {
    let result = '';
    for (let j = i; j < n; j++) {
        result += '*'
    }

    console.log(result);
}