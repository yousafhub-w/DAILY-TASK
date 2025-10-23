var maxFreqSum = function(s) {
    let vowels= "aeiou"
    let max = ""
    let a = ""
    for(i=0;i<s.length;i++){
        for(j=i+1;j<s.length;j++){
            if(vowels.includes(s[i])){
                max +=s[i]
            }else{
                a +=s[i]
            }
        }
    }
    return max
     
    
};
console.log(maxFreqSum("successes"));

