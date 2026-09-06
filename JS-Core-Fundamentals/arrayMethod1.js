//foreach
let name=["Antor","Deep","Rupom","Fossils","Cybersecurity"];
let newName=name.forEach((f,idx)=>{
    console.log(`${idx+1} -> ${f}`)
})
//forEach can't return
//map
let code=["Python","JS","HTML","CSS","Node"];
let newCode=code.map((g)=>{
    return `${g}`
})
console.log(newCode)
//map without return
let newCode2=code.map((g)=>g.toLowerCase());
console.log(newCode2)
//filter
let newName2=name.filter((k)=>k.length>6);
console.log(newName2)
//find
let student = [
    {
        name: "Antor",
        roll: 71,
        dept: "CSE",
        num:10
    },
    {
        name: "Deep",
        Pos: "Guitar",
        band: "Fossils",
        num:20
    },
    {
        name: "Rupom",
        Pos: "Vocal",
        band: "Fossils",
        num:25
    }
];
let newStudent=student.find((l)=>l.name);
console.log(newStudent)
//let name=["Antor","Deep","Rupom","Fossils","Cybersecurity"];
let newName3=name.find((l)=>l.length>4);
console.log(newName3)
//includes
let newCode3=code.includes("JS");
console.log(newCode3)
//some
let student1=student.some((c)=>c.num>20);
console.log(student1)
//every
let student2=student.every((x)=>x.num>20);
console.log(student2)
//reduce
let food=[
    {name:"Chicken Fry",price:70,stcok:true},
    {name:"Chicken Roll",price:50,stcok:false},
    {name:"Chiness Cake",price:30,stcok:true},
    {name:"Alu Fry",price:20,stcok:true},
    {name:"Chop",price:10,stcok:false}
]

let totalPrice=food.reduce((ac,cu)=>{
    return (ac +=cu.price)
},0)

console.log(totalPrice)

//sort
let a=[10,20,900,100,50,200].sort((a,b)=>a-b); //asc
let b=a.sort((a,b)=>b-a); //desc
console.log(a)
console.log(b)

let high=food.sort((a,b)=>a.price-b.price);
console.log("Price Low to High:",high)

let low=food.sort((a,b)=>b.price-a.price);
console.log("Price High to Low:",low)

//filter

let OrderPrice=food.filter((p)=>p.stcok==true).reduce((acc,cur)=>{
    return (acc+=cur.price)
},0);
console.log(OrderPrice)
