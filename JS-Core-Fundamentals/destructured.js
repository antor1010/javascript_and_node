//destructure object
const student={
    name:"Antor",
    age:22,
    dept:"CSE",
    enr:71
}
//old
const old=student.name;

//new
const{name,age,dept,enr}=student
console.log(name);
console.log(dept);

//nested 

const student1={
    name:"Deep",
    age:38,
    hobby:"Guitar",
    band:"Fossils",
    address : {
        City:"Kolkata",
        state:"WB",
        country:"India",
    },
}

const {name:newName,
address:{City,state,country}
}=student1

console.log(newName)
console.log(City,",",country)
//Array
const arr=["Antor","Deep","Rupom"];
//old
const old1=arr[0];
console.log(old1)
//new
const [firstName,second,third]=arr;
console.log(firstName,second);
//nested
const student3={
    name:"Antor",
    age:22,
    dept:"CSE",
    enr:71,
    code:["Python","Java","JS","HTML","Bash"],
}
const student4={
    name:"A",
    age:22,
    dept:"CSE",
    enr:72,
    code:["Python","Bash"],
}
const {
    name:newName1,dept:newDept,code:[firstCode]
}=student4
console.log(newName1,firstCode)

const{
    name:Newname,
    dept:NewDept,
    code:[,,thirdcode,]
}=student3;

console.log(Newname,thirdcode)
