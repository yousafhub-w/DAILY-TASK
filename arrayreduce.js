let reduce = function(nums, fn, init) {
    let acc = init;
    for (const num of nums) {
        acc = fn(acc, num);
    }
    return acc;
};
console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; },0));
