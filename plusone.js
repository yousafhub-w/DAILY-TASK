


var plusOne = function(digits) {
    let a = []
    for(i=0;i<digits.length;i++){
            a.push(digits[i])   
    } 
    let b = Number(a.join("")) +1
    let c = String(b).split("").map(Number)
    
    
    return console.log(c);
    
};
plusOne([1,2,3]) 



