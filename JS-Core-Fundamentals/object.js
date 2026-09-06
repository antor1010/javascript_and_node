//object

let student={
    name : "Antor",
    id : 71,
    dept : "CSE",
    country : "BD"
}

console.log(student);
console.log(student.name);
console.log(student.country);
console.log(student["name"]);

delete student.country;
console.log(student);
student.country={
    country:"BD",
    address:"Khulna"
}
console.log(student);
console.log(Object.entries(student));
console.log(Object.keys(student));

