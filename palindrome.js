function isPalindrome(str) {
  let a = str.toLowerCase()
  let reversed = a.split('').reverse().join('');
  if(a === reversed){
    console.log(`"${str}" is Palindrome`);
  }else{
    console.log(`"${str}" is not a Palindrome`);
    
  }
}
isPalindrome("Madam")