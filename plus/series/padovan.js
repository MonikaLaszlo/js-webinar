/**
 * Your task is to calculate the nth value of the
 * Padovan sequence
 * https://en.wikipedia.org/wiki/Padovan_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

 const padovanSequence = n => {
    if (typeof n !== 'number'){
        throw new TypeError('n has to be a number');
    }
    if (n < 0){
        throw new Error('n has to be positive');
    }

    let padovanN;
    const pad = [1, 1, 1];

    for (let i = 3; i <= n; i++){
        pad[i] = pad[i-2] + pad[i-3];
    }
    padovanN = pad[n];
    return padovanN;

 }
 module.exports = padovanSequence;