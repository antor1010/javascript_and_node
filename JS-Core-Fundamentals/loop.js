//for loop
for(let i=0;i<=5;i++){
    console.log(`Hello ${i}`)
}

let name=["Antor","deep","rupom","probar"]

let j =0
for (j;j<name.length;j++){
    console.log("Hello",name[j])
}
let a,x='';
for(a=0;a<5;a+=2){
    x+=a;   
}
console.log(x)

//while loop

let b=0
while(b<5){
    console.log(b)
    b++;
}

// break
console.log("break");
let c=0
for(c;c<5;c+=2){
    if (c==4){
        break;
    }
    console.log(c)
}

//continue
console.log("continue")
let d=0
for(d;d<6;d+=1){
    if (d==4){
        continue;
    }
    console.log(d)
}
//loop use of
let tech=["Python","JS","Html","css"];

for (let learing of tech){
    console.log("Can ",learing); 
}

//loop use in

let student = {
    name: "Antor",
    age: 23,
    dept: "CSE"
};

for (let key in student) {
    console.log(key,"->",student[key]);
}
