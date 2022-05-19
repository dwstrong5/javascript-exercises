const removeFromArray = function(...args) {

    if (args.length < 2) {
        return "ERROR";
    }

    let arr = args[0];

    for (let i = 1; i < args.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] === args[i]) {
                arr.splice(j,1);
            }
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
