/**
 * js 遍历
 */

// for


// obj 遍历

/**
 *  1. 使用 Object.keys: 返回一个数组，这个数组包含对象本身可枚举属性，但是不包含 Symbol 属性
 *  2. 使用 for in: 循环遍历对象以及继承的可枚举属性，但是不包含 Symbol 属性。如果仅仅需要自身属性，需要使用 Object.hasOwnProperty() 过滤
 *  3. 使用 Object.getOwnPropertyNames(obj):  返回一个数组,包含对象自身的所有属性(不含 Symbol 属性,但是包括不可枚举属性)
 *  4. 使用 Reflect.ownKeys(obj): 返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举
 */

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 4,
        e: 5,
        f: {
            g: 6
        }
    },
    arr: [1,2,3,4,5]
}

let deepClone = function(obj1) {
    let newObj = {};
    if(typeof obj1 != 'object') {
        return -1;
    } else {
        for(let key in obj1) {
            if(obj1.hasOwnProperty(key)) {
                console.log(key)
                newObj[key] = obj1[key];
            }
        }
    }
    return newObj;
}

let otherObj = deepClone(obj);
console.log('新对象', otherObj);

console.log(obj == otherObj);

otherObj.arr = [1,2,3];
console.log('新对象1', otherObj);

console.log('旧对象', obj);