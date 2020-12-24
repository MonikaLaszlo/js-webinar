/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

const arraySorted = (items, ignore) => {
  if (!Array.isArray(items)) {
    return false;
  }

  if (typeof ignore !== 'string') {
    ignore = '';
  } else {
    ignore = ignore.toLowerCase();

  }
  items = items.filter(element => typeof element === 'string');
  items = items.map(item => {
    item = item.replace(/\s/g, '');
    item = item.toLowerCase();
    item = item.split('').filter(c => !ignore.includes(c))
    .join('');
    return item;
  })
  const sortedItem = items.slice().sort();
  return items.every((item, index) => item === sortedItem[index]);
}

module.exports = arraySorted;