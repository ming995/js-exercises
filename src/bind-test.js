/**
 * bind 函数
 * 
 * 1. 返回一个函数
 * 2. 返回的这个函数还可以传递参数
 * 3. 返回的这个函数可以作为构造函数
 * 4. 必须是函数才能调用 bind
 */

Function.prototype.myBind = function (...context) {
    // 判断是否是函数调用
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
    }

    let self = this;
    let arg = Array.prototype.slice.call(context, 1); // 获取第一个参数后面的所有参数，因为 bind 的第一个参数是指向 this 作用域的参数，而后面的参数则是返回函数的参数

    let fnOp = {};
    // 这个函数是返回的函数
    let fnBind = function () {
        let fnBindArg = Array.prototype.slice.call(arguments);  // 也许返回的函数也会需要传递参数
        return self.apply(this instanceof fnOp ? this : context, arg.concat(fnBindArg));
    }

    fnOp.prototype = this.prototype;
    fnBind.prototype = new fnOp();
    return fnBind;

}