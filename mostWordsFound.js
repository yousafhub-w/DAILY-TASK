var mostWordsFound = function(sentences) {

    let number = []
    
    for(i=0;i<sentences.length;i++){
       
             number.push(sentences[i].split(' ').length) 
    }
    return Math.max(...number)

};
console.log(mostWordsFound(["alice and bob love leetcode jhddb qekjhdwehf", "i think so too", "this is great thanks very much"]));
