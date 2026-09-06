//if..else

let marks=88;

if (marks>=80 || marks>=90){
    console.log("A+");
}
else if (marks>=70){
    console.log("A");
}
else if (marks>=50){
    console.log("B");
}
else{
    console.log("F");
}

//switch
let agee=22;

switch(true){
    case agee>=18:
        console.log("Adult");
        break;
    case agee<18 && agee>=1:
        console.log("child");
        break;
    default:
        console.log("not born");
        break;
}

//ternery
let ageee=20;
ageee>=18 ? console.log("Adult") : console.log("child");

