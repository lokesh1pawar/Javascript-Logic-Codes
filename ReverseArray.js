// Reverse array without inbuild js function 

let arr = ["D","C","B","A"];

function reverseArray(arr){
  let revAr = [];
  for(let i = arr.length -1; i >=0; i--){
    revAr.push(arr[i]);
  }
  return revAr;
}

console.log(reverseArray(arr));
