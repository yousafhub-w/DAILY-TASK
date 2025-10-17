var commonChars = function(words) {
    let a =[];
    let ans = [];
    let element;
    let z;
    let string = words.join('').split('')
    for(i=0;i<words.length;i++){
         element = words[i].split('')
          z = string.filter(item =>{
           !element.includes(item)
           string.slice()
        })
          

    }
   return z

};
console.log(commonChars(["cool","lock","cooke"]));


// let a = ["cool","lock","cook"]

// for(i=0;i<a[i<a.length].length;i++){
//     console.log(i);
    
// // }


// let a = ['a','b','c','d']
// let b = ['a','b']
// let c = b.includes(a)
// console.log(c);

