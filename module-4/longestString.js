/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

const longestString = strings => {
    if (!Array.isArray(strings)) {
        return '';
    }
    strings = strings.filter(element => typeof element === 'string');
    strings.sort((a, b) => {
        return b.length - a.length || a.localeCompare(b);
    });
    return strings[0] || '';

}

module.exports = longestString;