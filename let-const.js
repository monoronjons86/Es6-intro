//breakup with var
//no more use of var
//let:let it to reassign

let money=25;
money=35;
console.log(money);
const bird='jaan pakhi';
// bird='moyna pakhi';
const message=bird+'potas potas'
console.log(bird);
const numbers=[12,89,65,45];
numbers.push(123);
numbers[1]=90;
console.log(numbers);

const student={
    name:'mono',
    address:'Rangpur'
}
let sum=0;
for(let i=0;i<numbers.length;i++){
    const number=numbers[i];
    sum=sum+number;
}