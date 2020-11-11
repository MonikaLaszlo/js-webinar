/**
 * Your task is to calculate the nth value of the
 * Pell numbers sequence
 * https://en.wikipedia.org/wiki/Pell_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

const pellNumber = n => {
    if (typeof n !== 'number'){
        throw new TypeError('n has to be a number');
    }
    if (n < 0){
        throw new Error('n has to be positive');
    }

    let pellNum;
    const pell = [0, 1];

    for (let i = 2; i <= n; i++) {
        pell[i] = 2 * pell[i - 1] + pell[i - 2];
    }
    pellNum = pell[n];
    // ...AND THIS COMMENT LINE!
    return pellNum;
}
module.exports = pellNumber;