const num = 400;
console.log(num);

const balance= new Number(300);    // This basically creates object 
console.log(balance);

console.log(balance.toString());   // Prints 300

console.log(balance.toString().length);  // prints 3

console.log(balance.toFixed(4));  // prints 300.0000 generallly used in e-commerce apps building where cart value is in decimals



/* ++++++++ Maths ++++++++++++++++*/


const min = 1;
const max= 6;

console.log(Math.floor(Math.random()*(max-min+1)+min));  /// Generic formula to calculate random value in a given range







