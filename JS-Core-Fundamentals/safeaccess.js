let user1={
    name:"Antor",age:22,address:{
        city:"Khulna",country:"BD"
    }
}
let user2={
    name:"A",age:21
}
//optinal chaining
console.log(user1?.address?.city);
// console.log(user2?.address?.city);
//nulish
console.log(user2?.address?.city ?? "Inside Bangladesh")
