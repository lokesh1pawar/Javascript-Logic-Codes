// Check if string is palindrome or not 

function CheckPalindrome(str){

  const cleanStr = str.toLowerCase();
  const revStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === revStr;
// console.log(revStr);
    
}

console.log(CheckPalindrome("AABBCbbAa"));
