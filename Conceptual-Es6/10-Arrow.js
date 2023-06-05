// show();
// function show(){
//     console.log('hellow world');
// }

const add=function(x,y){
    return x+y;
}
console.log(add(20,30));

const add1=(x,y)=>x+y;
console.log(add1(20,30));

const add2=(x,y)=>{
    const total=x+y;
    return total;
}
const showName=(name)=>console.log(name)
showName('mono')

const hello=()=>console.log('hello')
hello();