/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let x= true;
  str = str.replace(/[^A-Z0-9]/ig, "");
  const a = str.toLowerCase().split('');
  
  for(let i=0;i<a.length;i++){
    if(a[i]!=a[str.length-i-1]){
      x=false;
    }
  }
  return x;
}

module.exports = isPalindrome;
