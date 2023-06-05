const Person={
    name:'mono',
    age:'23',
    contact:{
        phone:'01723927596',
        email:'monoronjons86@gmail.com'
    },
    education:{
        schoolName:'Ranachandi high school and college',
        subjects:[
            {name:'Bangla',mark:45},
            {name:'English',mark:48},
            {name:'math',mark:43},
        ]
    }
}

// const age=Person.age;
// const age=Person['age']
// const property='name';
// const aa=Person[property];
// console.log(aa);
console.log(Person.education.subjects[0].mark);
