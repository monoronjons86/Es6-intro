const numbers=[12,5,23,45,11,18,9,55,61];
const bigNums=numbers.filter(number=>number>20);
const tiny=numbers.filter(n=>n<10);
const even=numbers.filter(num=>num%2===0);
// console.log(bigNums);
// console.log(tiny);
// console.log(even);

const products=[
    {id:1,name:'laptop',price:45000},
    {id:1,name:'mobile',price:8000},
    {id:1,name:'watch',price:35000},
    {id:1,name:'tablet',price:20000}
]
// const expensive=products.filter(product=>product.price>100000)
// console.log(expensive);
const expensive2=products.filter(product=>product.price<100000)
console.log(expensive2);

