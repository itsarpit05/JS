//object literals
const jsUser={
    name:"Arpit",
    age:18,
    "full name" : "Arpit Sachan",
    isLogin:false,
}
console.log(jsUser.age);   // 18
console.log(jsUser["age"]);   //18 but it is right way 
console.log(jsUser["full name"]);  // Arpit Sachan

jsUser.isLogin = true;
console.log(jsUser["isLogin"]);

// Object.freeze(jsUser) // no one can change values now

jsUser.greetings = function(){
    console.log("HI bro");
    
}
console.log(jsUser.greetings);   // prints undefined
console.log(jsUser.greetings()); 

