var lengthOfLastWord = function(s) {
    let b = s.trim().split(' ')
   return b[b.length-1].length

};
console.log(lengthOfLastWord('fly me   to   the moon  '));
