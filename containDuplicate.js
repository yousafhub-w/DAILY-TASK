var containsNearbyDuplicate = function(nums, k) {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                if(Math.abs(i-j)<=k){
                    return true
                }
            }
        }
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
