function add(first,second){
    const total=first+second;
    return total;
}
const result=add(20,30);
console.log(result);

const add1=function add1(first,second){
    const total=first+second;
    return total;
}
const add2=function add2(first,second){
    const total=first+second;
    return total;
}
const add5=function(first,second){
    return first+second;
}

function add4(first,second){
    return first+second;
}
const add6=(first,second)=>first+second;
const result4=add6(20,30);
console.log(result4)

//more arrow function practice 
const add7=(first,second)=>first+second;
const getFullName=(first,last)=>first+' '+last;
const multiply=(a,b)=>a*b;
const result8=multiply(7,8) ;
console.log(result8)

const addAll=(a,b,c,d,f)=>a + b + c + d + e + f;
// no parameter arrow function
const getPie=()=>3.14

//one parameter
const doubleIt=(num)=>num*2;
//one parameter simple version
const fiveTimes=num=>num*5;

//multi line arrow function
const doMath=(x,y,z)=>{
    const firstSum=x+y;
    const secondSum=y+z;
    const multiplyResult=firstSum+secondSum;
    const result=multiplyResult/2;
    return result;
}

