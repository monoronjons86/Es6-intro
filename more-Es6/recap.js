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

