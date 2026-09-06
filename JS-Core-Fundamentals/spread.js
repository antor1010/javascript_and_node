//spread operator
//array
const arr1=["Antor","CSE"];
const arr2=[71,"Cyber Security"];
const arr=[
    ...arr1,
    ...arr2
]
console.log(arr);
//object
const personalinfo={
    name:"Antor",
    age:23,
    dept:"CSE",
}
const contactinfo={
    email:"antorbiswas971@gmail.com",
    phone:"01827135377",
}
const full={
    ...personalinfo,
    ...contactinfo,
    address:{
        city:"Khulna",
        country:"BD",
    }
}
console.log(full)
