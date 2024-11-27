// Write a function for find vowels

let str = "Hello How are you, Today!";

function findVowels(str){
  let vowel = ["a","e","i","o","u"];
  let result = [];
   for(let final of str){
     if(vowel.includes(final)) {
       result.push(final);
     }
   }
  return result.join('')
}

console.log(findVowels(str));
