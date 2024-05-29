/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function asdasd(counter){
  counter +=1;
}

function countVowels(str) {
    // Your code here
    let counter = 0;
    const a = str.toLowerCase().split('');

    for(let i = 0; i<a.length;i++){
      if(a[i] =='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
        counter =counter + 1;
      }
    }
    return counter;
}

module.exports = countVowels;