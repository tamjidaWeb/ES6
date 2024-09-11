// //data access
// const data = [{id:1, name: 'abul', address: 'kochukhet'}];
// console.log(data[0].address);

// const products = {
//     count:5000,
//     data:[
//         {id:1, name:'laptop', price : 65000},
//         {id:2, name:'laptop2', price: 120000},
//     ]
// }
// console.log(products.data[1].price);

// const user = {
//     id:5001,
//     name: ' raj',
//     address:{
//         street:{
//             first: '34/c uttor side',
//             second: ' badda',
//             third:'no bari',

//         },
//         city:'dhaka',
//     }
// }
// const user2 = {
//     id: 5002,
//     name:'pori bibir majar',
//     address:{
//         city:'chittagong',
//         country:'bangladesh',
//     }
// }
// console.log(user2.address.street?.second)
// console.log(user.address.street?.second)


//data access

const data = [{id:1, name:'abul', address:'kochu khet'}]
// console.log(data[0].address)

const products = {
    count: 500,
    data:[
        {id:1, name:'lenevo laptop', price:65000},
        {id:2, name:'mac', price:120000}
    ]
}

// console.log(products.data[1].price);

const user = {
    id: 5001,
    name:'shoriful raj',
    address:{
        street:{
            first:' 68/c, asad avenue',
            second: 'dhanmondi'
        },
        city:'dhaka'
    }
}

const user2 = {
    id:5002,
    name:'pori biwir majar',
    address:{
        city: 'cittagong',
        country:'bangladesh'
    }
}
console.log(user2.address.street?.country)
console.log(user2.address.country);
