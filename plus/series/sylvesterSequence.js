/**
 * Your task is to calculate the nth value of the
 * Sylvester's sequence
 * Since numbers can be very big, use %10^9 + 7.
 * https://en.wikipedia.org/wiki/Sylvester%27s_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

const sylvesterSequence = n => {
    if (typeof n !== 'number') {
        throw new TypeError('n has to be a number');
    }
    if (n < 0) {
        throw new Error('n has to be positive');
    }

    let sylNumber;
    const sylNum = [2, 3];
    const a = 10000000007;

    for (let i = 2; i <= n; i++) {
        sylNum[i] = Math.pow(sylNum[i - 1], 2) - sylNum[i - 1] + 1;
    }
    sylNumber = sylNum[n];
    return sylNumber % a;
}

module.exports = sylvesterSequence;