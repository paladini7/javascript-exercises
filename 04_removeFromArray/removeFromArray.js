const removeFromArray = function(array, ...x) {
    let result = array.filter(item => !x.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
