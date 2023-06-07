// const numbers=[2,8,4,6,3];
// const output=[];
// for(const number of numbers){
//     const doubled=number*2;
//     output.push(doubled);
// }
// console.log(output);

// function getDoubles(numbers){
//     const output=[];
//     for(const number of numbers){
//         const doubled=doubleIt(number)
//         output.push(doubled);
//     }
//     return output;
// }
// const result=getDoubles(numbers);
// console.log(result);

// function doubleIt(number){
//     return number*2

// }

// const doubleIt=num=>num*2;
// const makeDouble=numbers.map(doubleIt);
// console.log(makeDouble);

// const fiveTimes=[1,2,3,4,5].map(x=>x*5);
// console.log(fiveTimes);

/*
purpose:
1.get an array
2.for every element of the array do something
3.store the result in an array
4.return the result array
*/

//==================again see and practice here======================
const numbers=[2,8,6,4,10]
const output=[];

console.log(output)

function getDoubles(){
    const output=[];
    for(const number of numbers){
        const doubled=doubleIt(number)
        output.push(doubled)
    }
    return output;
}
// function doubleIt(number){
//     return number*2;

// }
const doubleIt=nam=>nam*2;
const result=getDoubles(numbers);
console.log(result);
const makeDouble=numbers.map(doubleIt);
console.log(makeDouble)
/*
purpose:
1.get and array
2.for every elements of the array do something 
3.store the result in an array
4.return the result array

*/

