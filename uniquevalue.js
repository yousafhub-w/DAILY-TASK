var singleNumber = function(nums) {
    let unique= nums.filter((a,b,c)=> c.indexOf(a)===c.lastIndexOf(a))
return console.log(unique)
};
singleNumber([2,2,1])

let x = [2,2,1]
for(let a of x){
    if(x.indexOf(a)===x.lastIndexOf(a)){
        console.log(a);
        
    }

}

var singleNumber = function(nums) {
  for(let a of nums){
    if(nums.indexOf(a)===nums.lastIndexOf(a)){
        return console.log(a);
        
    }
  }
}
singleNumber([2,2,1])
