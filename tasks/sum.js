
function arrayStatistics(arr) {
    if (arr.length === 0) {
        return {
            sum: 0,
            average: 0,
            min: 0,
            max: 0
        };
    }

    const sum = arr.reduce((acc, current) => acc + current, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        sum,
        average,
        min,
        max
    };
}

const inputArray = [2, 3, 4, 2, 5, 6, 4, 3, 2, 5];
const stats = arrayStatistics(inputArray);
console.log("Sum:", stats.sum);
console.log("Average:", stats.average);
console.log("Minimum:", stats.min);
console.log("Maximum:", stats.max);