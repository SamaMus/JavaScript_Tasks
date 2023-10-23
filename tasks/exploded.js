
function explodeString(inputStr) {
    const explodedStr = inputStr.split('').map(char => char.repeat(2)).join('');
    return explodedStr;
}

const inputString = "Baku";
const exploded = explodeString(inputString);
console.log(exploded);