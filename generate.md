# generate
> generate 的出现是为了解决异步回调函数产生的回调地狱问题

## 初识

如下代码

```js
function *test () {
    yield 'helllo'  // {value: 'hello', done: 'false'}
    yield 'world'   // {value: 'world', done: 'false'}
    return 'ending'  // {value: 'ending', done: 'true'}
}
let a = test();
```
上面的代码就是一个最简单的 generate 函数代码，主要特点: 
- 函数名称前有 `*`
- 函数内部出现了 `yield`

## 详解

generate 函数其实可以看做一个 `iterator` 对象生成器。iterator 是一种为不同数据结构提供统一访问的接口，可以看做是遍历的一种方式。

当我们调用 test 函数的时候，函数并不会执行，而是返回一个指向内部状态的一个指针对象。然后指针对象调用 next 方法移动指针，这个时候遇到关键字 `yield`

yield 会暂停 test 函数从而执行自身后面的函数(可以看做异步请求之类的操作)。

