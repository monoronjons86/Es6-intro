// const numbers=[12,56,87,44];
// const half=numbers.map(n=>n/2);
// const thirds=numbers.map(x=>x/3);
// // console.log(half);
// // console.log(thirds);
// const friends=['Tom Hanks','Tom Cruise','Tom Brady','Tom Solaiman'];
// const firstLetters=friends.map(friend=>friend[0]);
// // console.log(firstLetters);
// const nameLengths=friends.map(friend=>friend.length);
// // console.log(nameLengths);
// const products=[
//     {id:1,name:'laptop',price:4500},
//     {id:1,name:'Mobile',price:8000},
//     {id:1,name:'Watch',price:35000},
//     {id:1,name:'Tablet',price:23000}
// ];
// // const items=products.map(product =>console.log(product.name));
// const items=products.map(product=>product.name);
// // console.log(items);
// const prices=products.map(p=>p.price);
// console.log(prices);

//================== again try lan map kore de vi====================
const numbers=[12,56,87,44];
const half=numbers.map(n=>n/2);
const thirds=numbers.map(x=>x/3);
console.log(half);
const friends=['Tom Hanks','Tom Cruise','Tom Brady','Tom solaiman'];
const firstLetters=friends.map(friend=>friend);
// console.log(firstLetters);
const nameLengths=friends.map(friend=>friend.length);
console.log(nameLengths);

const products=[
    {id:1,name:'laptop',price:4500},
    {id:2,name:'Iphone',price:8500},
    {id:3,name:'watch',price:4000},
    {id:1,name:'tab',price:25000}
];
// const items=products.map(product=>console.log(product))
const items=products.map(product=>product.name);
console.log(items);
const prices=products.map(p=>p.price);
console.log(prices);