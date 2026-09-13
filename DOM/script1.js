console.log("conncetd")

let taskbtn=document.getElementById("todo")
let add=document.getElementById("addbtn")
let dele=document.getElementById("deltebtn")
let lis=document.getElementById("taskAdd")

//console.log(taskbtn)
//console.log(add)
//console.log(dele)
//console.log(lis)

//let addBTn=document.querySelector("#addbtn")
//console.log(addBTn)

add.addEventListener("click",function(){
   let li=document.createElement("li");
   li.textContent=taskbtn.value;
   lis.appendChild(li);
   taskbtn.value=""
});
dele.addEventListener("click",function(){
  console.log("Delete button clicked",taskbtn.value)
});
taskbtn.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
   let li=document.createElement("li");
   li.textContent=taskbtn.value;
   lis.appendChild(li);
   taskbtn.value=""
  }
})

//textContent=html theke niye show kore
//innerText=display te ja ache seta dekhai

let d=document.getElementById("header");
console.log(d.textContent)
console.log(d.innerText)
d.style.color="rgb(0,0,255)"
