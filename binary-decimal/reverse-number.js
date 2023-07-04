
function reverseNumber(x) {

    rem = 0
    const i = 10
    let ans = 0

    while (x != 0) {
        rem = x % 10;
        x = parseInt(x / 10);

        ans = ans * i + rem

    }
    console.log(`reverse: ${ans}`);
}


reverseNumber(123);


