// Find factorial of the given number 

let num = 7;

function findFactorial(num){
  let result = 1;

  for (let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}

console.log(findFactorial(num));
