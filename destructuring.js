let mark = [{"a":1, "b":2}, {"c":3, "d":4},{"e":5},{"f":6}]

// ------------------------a----------------------
let [a,...rest] = mark

console.log(a)
console.log(...rest)

// ---------------------b--------------------------

let [,{c,d}]=mark;
console.log({c,d});


