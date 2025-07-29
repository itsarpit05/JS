








const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const TotalCart = shoppingCart.map((mp)=>{
   return mp.price
})
.reduce((acc,currval)=> acc+currval,0)
console.log(TotalCart);



