const users=[
    {
        id:1,name:'abul',job:'doctor'
    }
]
console.log(users[0].name);
const data={
    count:5000,
    data:[
        {id:1,name:'babul',job:'leader'},
        {id:1,name:'dabul',job:'leader'}
    ]
}
const firstJob=data.data[0].job;
// console.log(data.data[0].job);

const user={
    id:5001,
    name:'thomas alba edison',
    address:{
        street:{
            first:'35/A kochukhet lane',
            second:'third ',
            third:'right side'
        },
        postOfficer:'cantonment',
        city:'Dhaka',
    }
}
const userFlor=user.address.street.second;
console.log(userFlor);

