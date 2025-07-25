const name = new String('Arpit-Sachan');  // creating object

console.log(name[3]);


console.log(name.toUpperCase());  // Best reference in console on browser , Original value not changes due to heap concept 
let str = name.substr(0,7);   // prints substring range from start to n-1 (start,n)
console.log(str);

let newstr = name.slice(-14,4);   //prints string in reverse order Arpi
console.log(newstr);
let s1 = "     Arpit           Main"

console.log(s1);
console.log(s1.trim()); //reomves spaces fromm start as well as end but not between words


let url = "arpit05sachan.com"

console.log(url.replace('05','-'));    // replaces @ with -

console.log(url.includes('arpit'))    //returns true

console.log(name.split('-'));     // splits name in array on basis on '-'  O/p ['Arpit' , 'Sachan']




