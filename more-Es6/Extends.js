class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    provideFeedback(){
        console.log(`${this.name}thanks you for your feedback`)
    }

}
class Instructor extends TeamMember{
    name;
    designation='web course team'
    team='web team';
    location;
    constructor(name,location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation='web course team'
    team='web team';
    tech;
    constructor(name,location,tech){
        super(name,location)
        this.tech=tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}
class JobPlacement extends TeamMember{
    designation='Job placement commandos';
    team='web team';
    region;
    constructor(name,location,region){
        super(name,location)
        this.region=region
    }
    ProvideRes(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}
const alia=new Developer('Alia Bhat','Dhaka','React');
console.log(alia);
alia.provideFeedback();

const bipasha=new JobPlacement('bipasha','kolkata','india');
console.log(bipasha);





//1.optional chaining
//student.marks?.math

//must know
//2.map,filter,find
//3.(optional):forEach,reduce (advanced)
//4.class
//5.(optional) inheritance,super;
//6.(must)prototypical Inheritance
