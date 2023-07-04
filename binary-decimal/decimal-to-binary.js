
function convertToBinary(x) {
    let bi = 0;
    let rem, i = 1
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bi = bi + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bi}`);
}


convertToBinary(10);


