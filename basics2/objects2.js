//obkects constructors

const ekartUser = new Object();

ekartUser.id = "123abc"
ekartUser.name="Ali"

// console.log(ekartUser);

const tinderUser = {
    email:"some@gmail.com",
    userName : {
        userFullName :{
            useractualName:"Sachan"
        }
    }
}
console.log(tinderUser.userName.userFullName.useractualName);

const obj1={1:"a" , 2:"b"};
const obj2 = {3:"c" , 4:"d"};

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const obj4 = {...obj1 , ...obj2}     // Best mwthod spread
console.log(obj4);

console.log(Object.keys(ekartUser));  // returns array of keys 
console.log(Object.values(ekartUser));  // returns array of values


