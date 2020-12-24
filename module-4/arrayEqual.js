/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

const arrayEqual = (first, second) => {
    if (!Array.isArray(first)|| !Array.isArray(second)) {
        console.warn(`Both parameters must be array!`);
        return false;
    }
    if (first.length !== second.length) {
        console.warn(`The length of the first array: ${first.length}, the length of the second array: ${second.length}.`);
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        if (Array.isArray(first[i]) || Array.isArray(second[i])) {
            if (!arrayEqual(first[i], second[i])){
                console.warn(`The ${i}. elements are different: in the first array: ${first[i]}, in the second array: ${second[i]}`);
             return false;
            }
        } else if (first[i] !== second[i]){
            console.warn(`The ${i}. elements are different: in the first array: ${first[i]}, in the second array: ${second[i]}`);
            return false;
        }
    }
   
    return true;
}

module.exports = arrayEqual;