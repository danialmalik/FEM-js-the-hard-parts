/**
 * Pure functions
 *
 * No side effects
 */
function squareNum(num) {
    return num * num;
}
console.log(squareNum(2));

/**
 * Higher order functions
 */
function getMultiplierFunc(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

const multiplyBy2 = getMultiplierFunc(2);
const multiplyBy3 = getMultiplierFunc(3);

console.log(multiplyBy2(10))
console.log(multiplyBy3(10))
