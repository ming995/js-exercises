function test(...params) {
   console.log(Array.prototype.slice.call(params, 1));
}

console.log(test(1,2));