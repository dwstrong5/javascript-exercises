const sumAll = function(a, b) {

    if (a < 0 || b < 0 || isNaN(a) || isNaN(b)) {
        return "ERROR";
    }

    if (!(typeof(a) === 'number' && typeof(b) === 'number')) {
        return "ERROR";
    }

    result = 0;

    if (a === b) {
        return a;
    }

    if (a < b) {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
