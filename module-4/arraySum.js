/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

const arraySum = elements => {
    if (!Array.isArray(elements)) {
        return 0;
    }
    /*
        return elements.flat(100)
            .filter(element => typeof element === 'number')
            .reduce((a, b) => a + b, 0);
    */

    const arr = [];
    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === 'number') {
            arr[i] = elements[i];
        }
        else if (elements[i] instanceof Array) {
            arr[i] = arraySum(elements[i]);
        }
    }

    return arr.reduce((a, b) => a + b, 0);


}

module.exports = arraySum;

