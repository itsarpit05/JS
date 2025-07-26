const marvel_heros = ["thor" , "ironman" ,"captamerica"];
const dc_heros = ["batman" , "flash" , "superman"];

marvel_heros.push(dc_heros)
console.log(marvel_heros);   // takes dc_heros as a single ele and adds it to 4th ind of marvel heros as whole

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);  // now it concats it to our expected lines but remember to put it into new array like we created all heros array


/******Best Method to Use Spread****** */


const all_newheros = [...marvel_heros,...dc_heros]
console.log(all_newheros);



/*************FLAT*********** */

const weird_array =[1,3,4,[5,6,7],[8,9],3]

const actual_array = weird_array.flat(Infinity)

console.log(actual_array);  // [1.3,4,5,6,7,8,9,3]


const name = "Arpit"
console.log(Array.from(name));   // converts it into array ['A','r','p','i','t']

console.log(Array.from({name:"Arpit"})); // INTERESTING THING gives []


const score1=50
const score2=69
const score3=4

console.log(Array.of(score1,score2,score3));    //prints [50,69,4]



