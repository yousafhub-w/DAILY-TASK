function even(a){
    let count=0;
    for(i=0;i<a.length;i++){
        
        if(a[i]%2==0){
            count ++
        }
    }return count
 }
console.log(even([4,7,2,3,8,33,24,4,6,8,78]))