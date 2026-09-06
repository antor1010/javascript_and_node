//rest operator
//function
function add(...numbers){
    let total=0;
    for(const num of numbers){
        total +=num
    }
    return total
}
console.log(add(1,2,3,4,5))
function nam(one,...reamining){
    //return(one,reamining);   //last return return reamining mainly kaj korbe
    return [one,reamining];   //sob gulo return debe
}
console.log(nam("Antor","Deep","Rupom","Fossils"))
//object
const p1={
    name:"Antor",
    age:22,
    dept:"CSE",
    position:"Cyber security"
}

const {age,...reamin} = p1;
console.log(reamin)

//array
const arr=["Antor","Deep","Rupom","Guitar","Music"];
const [first,,,...rest]=arr;
console.log(first,rest)
