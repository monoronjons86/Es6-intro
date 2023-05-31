//1.var let const
//break up with var
const numbers=[12,546,45,98];
let salary=450;
salary=550;

//2.default parameters
function calculateSalary(salary,tax=0.25,bonus=0){
    const remaining=salary-salary*tax;
    const total=remaining+bonus;
    return total;
}
//3. template string
const elementHTML=`
<div>
<h3>Name:</h3>
<p>Address:</p>
<p>Others: ${calculateSalary(10000)}
<p>Other:${numbers[2]} </p>
</div>

`
//4.Arrow function
const doubleIt=x=>x*2;
const calculateSalary2=(salary,tax,bonus)=>salary-salary*tax+bonus;

//5.spread
const ages=[11,13,15,14,10];
const newAges=[...ages,22,24,23];

//destructuring
const{x,y,z,...c}={x:45,  y:12, z:33, Name:'sakib al hasan', salary:4500,}
const [a,b,...r]=[12,45,21,65,98]
