//Nested Object 
let student1={
    name:"Antor",
    id:71,
    address:{
        country:"BD",
        City:"Khulna",
        zip:9202
    },
};
console.log(student1);

console.log(student1.address);
console.log(student1["name"]);
console.log(student1.address.City);
console.log(Object.entries(student1));
console.log(Object.entries(student1)[0][1]);

//Nested Array
let st1=[
    {
        name:"Antor",
        id:71,
        dept:"CSE",
        ins:["Guitar","cyber"]
    },

    {
        name:"Deep",
        id:72,
        dept:"CSE"       
    },
    {
        name:"Rupom",
        id:73,
        dept:"CSE"
    },
]


console.log(st1);
console.log(st1[0])
console.log(st1[0].name);
console.log(st1[0].ins[0]);
st1[0].ins[1]="Cyber security";
console.log(st1[0])
st1[0].ins.push("Networking");
console.log(st1[0])
