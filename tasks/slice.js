function printSlices(word) {
    for (let i = 1; i < word.length; i++) {
        const slice1 = word.slice(0, i);
        const slice2 = word.slice(i);
        console.log(slice1 + '_' + slice2);
    }
}
const word = "SITE";
printSlices(word);

