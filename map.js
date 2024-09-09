//map ==> loops through each element of the array and do the operation that you passedin the call back 
// function and hold the result from each operation in an array and finnaly returns you the array
const number = [ 2,4,5,1,9,3,7];


// function doubleIt(num){
//     // console.log('num now',num)
//     return num*2;
// }
// const result =number.map(doubleIt)
// console.log(result)

// const double2 = n => n*2;
// const output = number.map(double2)
// console.log(output)
// const output2 = number.map(n=> n*2);
const fiveBonus = number.map(num =>num+5);
// console.log(fiveBonus);

const halves = number.map(num=>num/2);
console.log(halves);
const friends = ['john', 'mikel','jimil','oliver'];
const length = friends.map(frnd=>frnd.length);
console.log(length);
const firstLetter = friends.map(friend=>friend[0]);
console.log(firstLetter)

// const doubled = [];
// for(const num of number){
//     const double = num*2;
//     doubled.push(double);
// }
// console.log(doubled)