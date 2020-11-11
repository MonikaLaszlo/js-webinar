/**
 * Your task is to calculate the nth value of the
 * Tribonacci sequence
 * https://en.wikipedia.org/wiki/Tribonacci_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

const tribonacci = n => {
    if (typeof n !== 'number'){
        throw new TypeError('n has to be a number');
    }
    if (n < 0){
        throw new Error('n has to be positive');
    }
    let tribNumber;
    const trib = [0, 0, 1];

    for (let i = 3; i <= n; i++){
        trib[i] = trib[i-1] + trib[i-2] + trib[i-3];
    }
    tribNumber = trib[n];
    return tribNumber;
}
module.exports = tribonacci;
