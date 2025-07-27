
console.log(add(5))   // This works absolutely fine

function add(num){
    return num+1;
}


console.log(addTwo(6));    // This trows error because of storing it into variable  (HOISTING)
const addTwo = function(nums){
    return nums+2;
}


