// ------------(a)-----------
console.log(Math.floor(Math.random()*(1+99)));


// ------------(b)--------------
let arr=[23,45,67,12,89,3]
let arr1= Math.max(...arr)
console.log(arr1);

let arr2= Math.min(...arr)
console.log(arr2);

// // --------------(c)--------------
function sqrt(num){
    return console.log(Math.sqrt(num))
}
sqrt(16)

// ------------addarray-------------------

function as(num){
    k=34
    let a = k.toString().split("").map(Number)
    let b = num.slice(0,2)

    console.log(b.concat(a));
}
as([4,5,6,7,8])