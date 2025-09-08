function reverseStr(a){
   let b= "";
    for(i=(a.length)-1;i>=0;i--){
      b += a[i]
    }
    return b
}
console.log(reverseStr("Transformation"));
