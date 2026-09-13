let h = document.getElementById("title");

let input = document.getElementById("taskInput");

let btn = document.getElementById("addBtn");

let ul = document.getElementById("taskList");

h.textContent = "My Daily Tasks";

h.style.color = "orange";

btn.addEventListener("click", function(event) {

    let lt = input.value;

    console.log(lt);
    if(lt!=""){
      let li = document.createElement("li");
      li.textContent=lt
      let deletebtn=document.createElement("button");
      deletebtn.textContent="del";
      deletebtn.addEventListener("click",function(event){
        li.style.color="red"
      })
      let com=document.createElement("button");
      com.textContent="Complete";
      com.addEventListener("click",function(event){
        li.style.color="blue"
      })
      // li.addEventListener("click",function(event){
      //     event.target.remove()
      // })
      li.appendChild(com)
      li.appendChild(deletebtn);
      ul.appendChild(li)
    }
    
    input.value="";
});
