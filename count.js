function spcfcNmbr(arr,num){
    let count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]===num){
            count++
        }
    }
    return count
}
console.log(spcfcNmbr([4,7,8,,5,5,5,3,2,6,89,90,6,3,3,6,67,54,5,5,5],5));
