
// const numbers= [3,2,5,4,7,3,9,8];
// // const result = numbers.forEach(n=> console.log(n*2));
// const result = numbers.forEach(n=> {

// });
// console.log(result)
//filters select elements based on a condition and returns an array with the element that fulfilled the condition
const numbers= [3,2,5,4,7,3,9,8];

const players = [75,65,67,72,64,81];
// const selected = players.filter(p=> p>50);
const selected = players.filter(p=>p%2===0)
// console.log(selected);

const friends = ['joh', 'mikel','jimil','oliver'];

const oddFriends = friends.filter(frnd=> frnd.length<4);
console.log(oddFriends)
