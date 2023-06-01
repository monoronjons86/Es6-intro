//syntactic sugar
class Instructor{
    name;
    designation='web course team'
    team='web team';
    location;
    constructor(name,location){
        this.name=name;
        this.location=location
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const aamir=new Instructor('mono','dhaka');
aamir.startSupportSession('9.00');
aamir.createQuiz(60);
console.log(aamir);

const solaiman=new Instructor('ronjon','Rangpur');
console.log(solaiman)