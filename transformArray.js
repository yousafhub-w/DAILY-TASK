var transformArray = function(nums) {
    
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            nums.splice(i,1,0)
        } else {
            nums.splice(i,1,1)
        }
    }

    return nums.sort((a, b) => a - b);

};
console.log(transformArray([4,3,2,1]));
