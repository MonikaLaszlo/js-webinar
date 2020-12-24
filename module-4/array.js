const removeDuplication = arr => {
    return arr.filter((element, index) => element !== arr[index]);
}


const t1 = [1, 2, 3, 4, 5, {1: 'a'}];
const t2 = t1.slice();
const t3 = JSON.parse(JSON.stringify(t1));