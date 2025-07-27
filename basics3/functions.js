function add(num1,num2){
    console.log(num1+num2);
    
}

add(7,6)    // prints 13

function addTwo(numb1,numb2){
    return numb1+numb2;
}

const res = addTwo(2,3);
console.log(res);

function loggedIn(user){
    return `${user} logged in`
}

console.log(loggedIn("Arpit"));   // Arpit logged in

// when nothing is passed it gives undefined


function cart(...nums){      // rest operator
    return nums;
}
console.log(cart(100,200,400))
/*******************Interview Quesn******************** */

function carttwo(val1,val2,...num){   // removes first two values from array
    return num;
}
console.log(carttwo(400,500,600));     // prints [600]


/**************functions with objects******************** */

const user={

    name:"Arpit"
}

function handleObject(anyObject){

    console.log(`Username is ${anyObject.name}`);

    
}

handleObject(user);     // Prints username is Arpit

   /********OR****** */

 handleObject({
    name: "Hari"                   // prints username is Hari
 })

 /************** Arrays with function******************** */

 const arr = [1,4,6,8]

 function getArray(arr1){
    return arr1[3]
 }

 console.log(getArray(arr));     // prints 8
 