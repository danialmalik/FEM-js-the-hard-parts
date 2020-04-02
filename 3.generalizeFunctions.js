/**
 * Not general
 */
function copyAndDivideBy2(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output[i] = arr[i] * 2;
    }
    return output;
}

const result = copyAndDivideBy2([1, 2, 3])
console.log(result)
/**
 * Generalized
 */

function copyArrayAndManipulate(array, instruction) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output[i] = instruction(array[i])
    }
    return output;
}

const result2 = copyArrayAndManipulate([1, 2, 3, 4], num => num * 2)
console.log('result2', result2)

/**
 * functions are first class objects because they "are" objects
 */

/**
 * copyArrayAndManipulate is higher order function because it takes a function as an argument
 * instruction is the callback function because it will be called be the higher order function
 */
