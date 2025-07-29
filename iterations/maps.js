const nums = [1,2,3,4,5,6]

const myNums = nums.map((mp)=>{
    return mp+4;
})
console.log(myNums);

const anotherNums= [ 1,2,4,5,6]


/*******************Chaining************************ */
const myFavNums = anotherNums.map((num)=>{
    return num*5
})
.map((num)=>{
  return num+1
})
.filter((num)=>{
    return num%6===0
})
console.log(myFavNums);

