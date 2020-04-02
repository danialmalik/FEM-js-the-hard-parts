/**
 *  Execution context
 *
 *      Global
 *          Run the whole file from top to bottom
 *      local
 *          go though a block line by line (call a function for example)
*/

const num = 3;  // global context
function mulBy2(inputNumber){
    const result = inputNumber * 2; // local context
    return result;
}
console.log(mulBy2(2));
