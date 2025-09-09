function str(arr){
    let vowels= ["a","e","i","o","u"]
    return arr.filter((word)=> vowels.includes(word[0]))
       
}
console.log(str(["ant", "eat", "tea", "oats"]));
