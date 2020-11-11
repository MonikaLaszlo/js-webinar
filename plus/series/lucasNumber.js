/**
 * Your task is to calculate the nth value of the
 * Lucas sequence.
 * https://en.wikipedia.org/wiki/Lucas_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */

 const lucasNumber = n => {
    if (typeof n !== 'number'){
        throw new TypeError('n has to be a number');
    }
    if (n < 0){
        throw new Error('n has to be positive');
    }

    let lucasN;
    const lucas = [2, 1];

    for (let i = 2; i <= n; i++){
        lucas[i] = lucas[i-1] + lucas[i-2];
    }
    lucasN = lucas[n];
    return lucasN;
 }

 module.exports = lucasNumber;