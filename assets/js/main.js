
function checkDecimal(value) {
    if (value < 10) {
        return '00' + value
    } else if (value >= 10 && value <= 99) {
        return '0' + value
    } else if (value >= 100) {
        return value
    }
}

for(let i = 1; i <= 100; i++) {
    let returnArray = [];
    returnArray = 'image_' + checkDecimal(i) + '.png'
    console.log(returnArray);
}