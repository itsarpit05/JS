const user={
    username:"Arpit",
    price:999,
    welcomemessage: function(){
   console.log(`${this.username} Welcome bro`);  // this keyword refers to current context
   
    }
    
}

user.welcomemessage();  // refers to current context 

user.username="Adi"
user.welcomemessage()   // context of username is now changed to Adi

console.log(this);  // gives an empty object as this refers to current context and here current context in globe scope is empty , but if you run this command in browser it shows an window object because in browser global scope is windows



// function thisnotworksonfunction(){
//     let naming="Aavya"
//     console.log(this.naming)
    
// }
// thisnotworksonfunction()   // gives undefined 




const arpit=(num1,num2) =>{
      return num1+num2                         //Basic arrow fun
}

console.log(arpit(5,7))


/************ARROW FUNCTION WITHOUT RETURN************ */

const aryan=(nums1,nums2)=>(nums1+nums2)     // no need to write return statement in this way  , also known as IMPLICIT return
console.log(aryan(4,3));
