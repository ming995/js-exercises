/**
 * 防抖函数
 * 解释: 高频事件触发后，在 n 秒呢执行一次
 */

let debounce = function (fn) {
    let timer = null; // 维护一个时间
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        },1000);
    }
}