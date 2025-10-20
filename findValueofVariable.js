var finalValueAfterOperations = function(operations) {
    x = 0
    for(i=0;i<operations.length;i++){
        if(operations[i].includes("++")){
            x++
        } else {
            x--
        }
    }
    return x
};
console.log(finalValueAfterOperations(["++X","++X","X++"]));
