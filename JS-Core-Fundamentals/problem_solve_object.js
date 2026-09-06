let student={
    name:"Antor",
    id:71,
    marks:{
    python: 86,
    js: 85,
    html: 83,
    css: 74,
    bash: 81,
    java: 82
    },
}
let totalMarks=0;
let totalsbj=0;
for(let i in student.marks){
    totalMarks+=student.marks[i];
    totalsbj++;
}
console.log(totalMarks,totalsbj);
let avg=totalMarks/totalsbj;
console.log(avg.toFixed(2))

if(avg>=80){
    console.log("Good in Coding");
}
else{
    console.log("Do practice")
}

let cart=[
    {
        name:"Shirt",
        price:1200,
        stock:2
    },
    {
        name:"Pant",
        price:1800,
        stock:3
    },
    {
        name:"socks",
        price:100,
        stock:5
    },   
]

let totalprice=0;
let totalStock=0;

//for (let i of cart){
//    totalprice+=i.price;
//    totalStock+=i.stock;
//}
//console.log(totalStock,totalprice)

for (let i in cart){
    totalprice+=cart[i].price;
    totalStock+=cart[i].stock;
}
console.log("Total Stock",totalStock,"Total Price",totalprice)
