const number=[2,4,1,9,3,5,26,27];
const number2=[32,45,67];
// console.log(Math.min(...number));
console.log(Math.max(...number));
// console.log(...number)
const newArr=[123,21,24,32,...number2,99];
console.log(newArr);

const arr1=[1,2,3,4,5];
const arr2=[...arr1];

arr1.push(99);
arr2.push(55);
// console.log(arr1);
// console.log(arr2);

const arr=[1,2,3,4,5,6,7];
// const first=arr[0];
// const second=arr[1];
// console.log(first,second);

const [first,second,...remaining]=arr;
console.log(first,second);
console.log(remaining);