function oddEven(numbers){
    for (i=0;i<numbers.length;i++){
        if(numbers[i]==0){
            console.log(`${numbers[i]}  ZERO`);
            
        }else if(numbers[i]%2!==0){
            console.log(`${numbers[i]} is an ODD number`);

        }else if(numbers[i]%2==0){
            console.log(`${numbers[i]} is an EVEN number`);
            
        }
    }
}
oddEven([0, 3, 4, 7, 10, 15, 0, 22]);