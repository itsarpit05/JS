let num = 33
console.log(typeof num);   // prints number

let val = " 33"
console.log(typeof val);  // prints string

let newval = Number(val); // type conversion from string to num

console.log(typeof newval);  // pritnts number

let a ="21abc"
 new_a = Number(a)  
 console.log(typeof new_a); // prints number despite it being not a proper number
    
 console.log(new_a);   // prints NaN which means not a number

 let b = null 
 console.log(typeof Number(b));   // prints number

 let c= undefined
 console.log(typeof Number(b));   // prints number
 
// converting into Number

//  hitesh -> NaN
//  "23" ->23
//  "324"->324 -> type = NaN
 // true -> 1 , false->0

 /*----Converting into boolean---

 1-> true , 0->false
 ""->false
"AnythingInsideString" -> true


*/
