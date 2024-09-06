const me = {
    firsName: "Thor",
    lastName: 'Odinson',
    age: '1500',
    currentaddressnumber: '616',
    village: '1',
    road: 'Bifrost',
    subdistrict:'Yggdrasill',
    district:'NorseMythology',
    province:'Asgard',
    zipcode:'616',
    telephone: '0999999999',
    mobilephone:'0999999999',
    email:'ThorOdinson@gmail.com',
    f:{
        firsName: 'gg',
        lastName: 'ez',
        age: '1000',
    ani:{
        aniType: 'dog',
        
    }

    }
}
  
  console.log(me.firsName)
  console.log(me.lastName)
  console.log(me.firsName + " " + me.lastName)

  me.firsName = "ggez"
  console.log(me.firsName)

  console.log(me.f.firsName)




  const me = {
    firsName: "Thor",
    lastName: 'Odinson',
    age: '1500',
    currentaddressnumber: '616',
    village: '1',
    road: 'Bifrost',
    subdistrict:'Yggdrasill',
    district:'NorseMythology',
    province:'Asgard',
    zipcode:'616',
    telephone: '0999999999',
    mobilephone:'0999999999',
    email:'ThorOdinson@gmail.com',
    f:{
        firsName: 'GG',
        lastName: 'EZ',
        age: '1000',
        chaya: 'GodGGEZ'
    }
},
mrBro:{
    firsName: 'inwzar',
        lastName: '007',
        age: '1400',
        chaya: 'mr.dog',
}





const myBro =[ {
    firsName: 'inwzar',
        lastName: '007',
        age: 16,
        chaya: 'mr.dog',
},{
    firsName: 'kawazaki',
        lastName: '007',
        age: 14,
        chaya: 'mr.l',
},{
    firsName: 'kanami',
        lastName: '007',
        age: 15,
        chaya: 'mr.5',
},{
    firsName: 'watare',
        lastName: '007',
        age: 18,
        chaya: 'mr.5',
},{
    firsName: 'mimasagi',
        lastName: '007',
        age: 20,
        chaya: 'mr.dick',
}]
console.log(myBro[1].firsName)


const  myBrochaya = myBro.map(function(element, index) {
    return ({
        firsName: element.firsName,
        chaya: element.chaya
    })
})

console.log(myBrochaya)



const myBroage = myBro.filter(function(element, index){
    return element.age > 19 && element.lastName === '007'
})

console.log(myBroage)