

function convertToBinary(x) {

    let dec_value = 0;

    // Initializing base value to 1, i.e 2^0
    let base = 1;

    while (x != 0) {
        let last_digit = x % 10;
        x = Math.floor(x / 10);

        dec_value += last_digit * base;

        base = base * 2;
    }
    console.log(`Decimal: ${dec_value}`);
}


convertToBinary(1010);


