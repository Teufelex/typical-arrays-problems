
exports.min = function min (array) {
    if (array && array.length > 0) {
        array.sort(function (a, b) {
            return a-b;
        })
        return array[0];
    } else {
            return 0;
    }
}

exports.max = function max (array) {
    if (array && array.length > 0) {
        array.sort(function (a, b) {
            return b-a;
        })
        return array[0];
    } else {
            return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array.length > 0) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    return avg;
    } else {
        return 0;
    }
}
