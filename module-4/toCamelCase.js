/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => simpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

const toCamelCase = toConvert => {
    if (typeof toConvert !== 'string') {
        return '';
    }

    return toConvert
        .split(' ')
        .filter(Boolean)
        .map((word, index) => {
            if (!index) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('')
        .replace(/[^a-zA-Z0-9]/gi, '')
}

module.exports = toCamelCase;