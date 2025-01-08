
// Find Pair of number whose sum is zero in an array without using in built function
// Const output = [-5,5]

// Solve by using 2 for loop

let arr = [-9,-8,-5,0,5,10,15];
let output = [-5,5];

function findPair(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                
            let res = [arr[i], arr[j]];
            return res;
            }
        }
    }
    return res;
}

console.log(findPair(arr));
