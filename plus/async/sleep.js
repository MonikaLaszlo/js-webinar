/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

const sleep = sec => new Promise((resolve, reject) => {
    if (typeof sec !== 'number') {
        reject('sec must be a number');
    }
    if (sec > 10) {
        reject('sec cannot be higher than 10');
    }
    setTimeout(() => resolve(), sec * 1000);
});

module.exports = sleep;

async () => {
    console.log(1);
    await Promise.race([sleep(5), sleep(4), Promise.reject('error')]);
    console.log(2);
}
