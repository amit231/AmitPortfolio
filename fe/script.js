const obj = {
    'hello_there_again': 23,
    'hello_there_21': 23,
    'hello_there_22': 23,
    'age_first': 23,
    'age_second': 23,
    'name': 'amit',
    'class': '2nd',
}

const obj3 = {
    "hello": {
        "there": {
            "21": 23,
            "22": 23,
            "again": 23
        }
    },
    "age": {
        "first": 23,
        "second": 23
    },
    "name": "amit",
    "class": "2nd"
};
function convertToObject(obj) {
    let result = {}
    for (let key in obj) {
        let keys = key.split('_');
        let ptr = result;
        for (let k of keys.splice(0, keys.length - 1)) {
            if (k in ptr) {
                ptr = ptr[k]
            } else {
                ptr[k] = {};
                ptr = ptr[k]
            }
        }
        ptr[keys[keys.length - 1]] = obj[key];
    }
    return result
}
function convertFromObj(obj, res, key) {
    if (typeof obj !== 'object') return res[key] = obj;
    for (let ke in obj) {
        convertFromObj(obj[ke], res, key == '' ? ke : key + '_' + ke);
    }
}
let res = {};
console.log(convertFromObj(obj, res, ''));
console.log(res);