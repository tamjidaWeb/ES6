const players = [65,67,72,64,81];
const selected = players.find(player=> player>70);
console.log(selected)

//foreach
// products.forEach(p=> console.log(p.id))

//filter
const products = [
    
        {id:1, name:'laptop', price : 65000},
        {id:2, name:'laptop2', price: 120000},
    ]
// const expensive= products.filter(p=> p.price> 70000)
// console.log(expensive)

//find
const affordable = products.find(p=> p.price<70000);
console.log(affordable)

//reduce
const total = products.reduce((acum,current)=> acum+current.price, 0);
console.log(total)