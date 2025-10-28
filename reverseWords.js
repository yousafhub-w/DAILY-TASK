var reverseWords = function(s) {
    let arr = []
    let val = s.split(' ').reverse()
    for(i=0;i<val.length;i++){
        if(val[i].length>=1){
            arr.push(val[i])
        }
    }

    return arr.join(" ")

};

console.log(reverseWords("a good   example"));
// --------q 151------------